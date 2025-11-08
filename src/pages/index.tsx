import { CreditsCanvas } from "@/components/CreaditsCanvas";
import { StartScreen } from "@/components/StartScreen";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);

  const handleStart = (withMusic: boolean) => {
    if (!withMusic) {
      // ミュート設定: 音量0をlocalStorageに保存
      localStorage.setItem('bgm-volume', '0');
    }
    // 常にautoPlay=trueで音声を開始（音量は0または設定値）
    setAutoPlayMusic(true);
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
