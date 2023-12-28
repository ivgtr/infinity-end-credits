import { useEffect, useRef, useState } from "react";

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
  const touchStart = useRef<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const handleTouchStart = (event: TouchEvent) => {
    touchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStart.current.x === null || touchStart.current.y === null) return;
    const currentX = event.changedTouches[0].clientX;
    const currentY = event.changedTouches[0].clientY;

    const deltaX = currentX - touchStart.current.x;
    const deltaY = currentY - touchStart.current.y;

    if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      onTap?.();
    } else if (Math.abs(deltaY) > Math.abs(deltaX)) {
      if (deltaY > 0) {
        onSwipedDown?.();
      } else {
        onSwipedUp?.();
      }
    } else {
      if (deltaX > 0) {
        onSwipedRight?.();
      } else {
        onSwipedLeft?.();
      }
    }

    touchStart.current = { x: null, y: null };
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onTap, onSwipedLeft, onSwipedRight, onSwipedUp, onSwipedDown]);

  return <div className="fixed inset-0 z-50 min-h-full w-full" />;
};
