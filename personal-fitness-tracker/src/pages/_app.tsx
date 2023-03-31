import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as JotaiProvider } from "jotai";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <JotaiProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </JotaiProvider>
  );
};

export default MyApp;
