import { CreditsCanvas } from "@/components/CreaditsCanvas";
import { StartScreen } from "@/components/StartScreen";
import Head from "next/head";
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
        <title>無限エンドロール</title>
      </Head>

      {!started && <StartScreen onStart={handleStart} />}

      {started && (
        <CreditsCanvas autoPlayMusic={autoPlayMusic} />
      )}
    </>
  );
}
