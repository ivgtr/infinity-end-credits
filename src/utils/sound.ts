import type { EasterEggType } from "@/types/credits";

// Web Audio APIを使用して効果音を生成
export const playEasterEggSound = (easterEggType: EasterEggType) => {
  if (typeof window === "undefined" || !easterEggType) return;

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // イースターエッグのタイプに応じて異なる音を生成
    switch (easterEggType) {
      case "famous_director":
        // キラキラ音（高音のベル音）
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        break;

      case "funny_role":
        // ポップ音（楽しい音）
        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;

      case "same_name":
        // グリッチ音（低音のノイズ）
        oscillator.type = "sawtooth";
        oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator.frequency.linearRampToValueAtTime(100, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.4);
        break;

      default:
        break;
    }
  } catch (error) {
    // Web Audio APIがサポートされていない場合は何もしない
    console.log("Audio playback not supported");
  }
};
