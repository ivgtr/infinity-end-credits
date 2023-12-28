import { useEffect } from "react";

export const MouseActionObserver = ({
  onClick,
  onWheelUp,
  onWheelDown,
}: {
  onClick: () => void;
  onWheelUp: () => void;
  onWheelDown: () => void;
}) => {
  const handleMouseClick = () => {
    onClick();
  };
  const handleMouseWheel = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      onWheelUp();
    } else if (event.deltaY > 0) {
      onWheelDown();
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("wheel", handleMouseWheel);
    return () => {
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, [onClick, onWheelUp, onWheelDown]);
  return <div className="fixed inset-0 z-50 min-h-full w-full" />;
};
