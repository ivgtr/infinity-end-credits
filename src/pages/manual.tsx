import Head from "next/head";
import { ManualCreditsCanvas } from "@/components/ManualCreaditsCanvas";
import { BackgroundMusicPlayer } from "@/components/BackgroundMusicPlayer";
import { StartScreen } from "@/components/StartScreen";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleStart = (withMusic: boolean) => {
    setAutoPlayMusic(withMusic);
    setStarted(true);
  };

  return (
    <>
      <Head>
        <title>無限エンドクレジット・手動</title>
      </Head>

      {!started && <StartScreen onStart={handleStart} />}

      {started && (
        <>
          <ManualCreditsCanvas />
          <BackgroundMusicPlayer autoPlay={autoPlayMusic} />
        </>
      )}
    </>
  );
}
