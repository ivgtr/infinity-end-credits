import { Noto_Sans_JP } from "next/font/google";
import { CreditsCanvas } from "@/components/CreaditsCanvas";
import Head from "next/head";

const notoSansJP400 = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>無限エンド・クレジット</title>
      </Head>

      <main className={`flex min-h-screen flex-col items-center justify-between ${notoSansJP400.className}`}>
        <CreditsCanvas />
      </main>
    </>
  );
}
