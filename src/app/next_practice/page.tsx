import { Suspense } from "react";
import ServerComponent from "./serverComponent";
import ClientComponent from "./clientComponent";
import { cookies } from 'next/headers';

export default function () {
  const nextCookies = cookies();
  const theme = nextCookies.getAll();

  return (
    <>
      <Suspense fallback="loading client components..." >
        {/* @ts-expect-error Server Component */}
        <ServerComponent theme={theme} />
      </Suspense>
      <ClientComponent theme={theme} />
    </>
  )
}