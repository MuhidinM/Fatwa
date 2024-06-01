// HeadMetadata.tsx
import Head from 'next/head';

export default function HeadMetadata() {
  return (
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="" />
      <link
        rel="icon"
        href="/favicon.ico"
        media="(prefers-color-scheme:light)"
      />
      <link
        rel="icon"
        href="/favicon.ico"
        media="(prefers-color-scheme:dark)"
      />
    </Head>
  );
}
