import { getMessages } from "next-intl/server";
import { FC, ReactNode } from "react";
import { NextIntlClientProvider as NextIntlClientProviderNative } from "next-intl";

type NextIntlClientProviderProps = { children: ReactNode };

/**
 * @see https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing
 */
export const NextIntlClientProvider: FC<NextIntlClientProviderProps> = async (props) => {
  const messages = await getMessages();

  return (
    <NextIntlClientProviderNative messages={messages}>
      {props.children}
    </NextIntlClientProviderNative>
  );
};
