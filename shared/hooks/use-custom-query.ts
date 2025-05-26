"use client";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type useCustomQueryOptions<TData, TError> = Omit<UseQueryOptions<TData, TError>, "onError"> & {
  onError?: (error: TError) => void;
  errorMessage?: string;
};

export const useCustomQuery = <TData, TError = Error>({
  onError,
  errorMessage,
  ...options
}: useCustomQueryOptions<TData, TError>) => {
  const t = useTranslations();
  const query = useQuery(options);

  useEffect(() => {
    if (query.error && errorMessage) {
      toast.error(t(errorMessage));
      onError?.(query.error as TError);
    }
  }, [query.error, errorMessage, onError, t]);

  return query;
};
