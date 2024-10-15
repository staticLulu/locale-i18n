import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "./Header";
import { HeroSection } from "./HeroSection";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider
          messages={JSON.stringify(messages) as unknown as AbstractIntlMessages}
        >
          <div className='bg-white shadow-md top-0 fixed w-full z-20'>
            <Header />
          </div>
          <HeroSection />
          <main className='max-w-screen-xl mx-auto p-12'>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
