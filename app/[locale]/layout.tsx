import type { Metadata } from "next";
import "@/public/styles/globals.css";
import { charisSIL, inter } from "@/shared/fonts";
import { cn } from "@/shared/utils/cn";
import { NextIntlClientProvider } from "next-intl";
import { Navbar } from "@/widgets/common/Navbar";
import { Footer } from "@/widgets/common/Footer";
import { TanstackProvider } from "@/shared/providers/TanstackProvider";
import { ToasterProvider } from "@/shared/providers/ToasterProvider";
import { FaviconsProvider } from "@/shared/providers/FaviconsProvider";
import { SocialSharePreviewProvider } from "@/shared/providers/SocialSharePreviewProvider";

const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;
if (!domain) {
  throw new Error("NEXT_PUBLIC_WEBSITE_DOMAIN env variable is empty");
}

export const metadata: Metadata = {
  title: "Latin Russian Parallel Corpus",
  description:
    "Параллельный корпус классических латинских текстов с русскими и греческими переводами, дополненный морфологическим анализом и расширенными возможностями поиска.",
  applicationName: "LRS",
  generator: null,
  creator: "KIWIbird717",
  publisher: "KIWIbird717",
  openGraph: {
    locale: "ru",
    alternateLocale: ["ru"],
    title: "Latin Russian Corpus",
    description:
      "Параллельный корпус классических латинских текстов с русскими и греческими переводами, дополненный морфологическим анализом и расширенными возможностями поиска.",
    images: `${domain}/preview.png`,
    url: `${domain}/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latin Russian Corpus",
    description:
      "Параллельный корпус классических латинских текстов с русскими и греческими переводами, дополненный морфологическим анализом и расширенными возможностями поиска.",
    site: "@site",
    creator: "@creator",
    images: `${domain}/preview.png`,
  },
  appleWebApp: {
    capable: true,
    title: "Latin Russian Corpus",
    statusBarStyle: "default",
  },
  category: "education",
  metadataBase: new URL(`${domain}/ru`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FaviconsProvider />
        <SocialSharePreviewProvider />
      </head>
      <NextIntlClientProvider>
        <body className={cn("antialiased", charisSIL.variable, inter.variable)}>
          <Navbar />
          <TanstackProvider>
            <ToasterProvider />
            {children}
          </TanstackProvider>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
