import { CreditsCanvas } from "@/components/CreaditsCanvas";
import { BackgroundMusicPlayer } from "@/components/BackgroundMusicPlayer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>無限エンドロール</title>
      </Head>

      <CreditsCanvas />
      <BackgroundMusicPlayer />
    </>
  );
}
