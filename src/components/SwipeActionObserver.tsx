import { useEffect, useState } from "react";

export const SwipeActionObserver = ({
  onTap,
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwipedDown,
}: {
  onTap?: () => void;
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
}) => {
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const handleTouchStart = (event: TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const touchDeltaX = touchEndX - touchStartX;
    const touchDeltaY = touchEndY - touchStartY;
    const touchDeltaXAbs = Math.abs(touchDeltaX);
    const touchDeltaYAbs = Math.abs(touchDeltaY);
    if (touchDeltaXAbs < 10 && touchDeltaYAbs < 10) {
      onTap?.();
    } else if (touchDeltaXAbs > touchDeltaYAbs) {
      if (touchDeltaX > 0) {
        onSwipedRight?.();
      } else {
        onSwipedLeft?.();
      }
    } else {
      if (touchDeltaY > 0) {
        onSwipedDown?.();
      } else {
        onSwipedUp?.();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onTap, onSwipedLeft, onSwipedRight, onSwipedUp, onSwipedDown]);

  return <div className="fixed inset-0 z-50" />;
};
