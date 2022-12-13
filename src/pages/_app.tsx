import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import {Suspense} from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
