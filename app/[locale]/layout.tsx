import { ReactNode } from "react";
import { fira } from "../lib/fonts";
import { routing } from "../i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";

export default async function layout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "uk")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-lt-installed="true">
      <body className={clsx("bg-main_bg text-white", fira.className)}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
