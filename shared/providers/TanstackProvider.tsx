"use client";

import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

const isMocking =
  process.env.NODE_ENV === "development" &&
  Boolean(parseInt(process.env.NEXT_PUBLIC_USE_MSW_MOCKS || "0"));

// Создаем экземпляр QueryClient с настройками по умолчанию
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      ...(isMocking ? { gcTime: 0 } : {}),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

// Проверяем, что код выполняется на стороне клиента
if (typeof window !== "undefined") {
  // Создаем persister для сохранения состояния в localStorage
  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  // Настраиваем сохранение состояния QueryClient с использованием persister
  persistQueryClient({
    queryClient,
    persister: localStoragePersister,
    maxAge: 1000 * 60 * 60 * 24, // Максимальный возраст кэша: 24 часа
  });
}

type TanstackProviderProps = { children: ReactNode };

// Компонент-обертка для предоставления QueryClientProvider всему приложению
export const TanstackProvider: FC<TanstackProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
