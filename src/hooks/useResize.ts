import { RefObject, useEffect, useLayoutEffect, useState } from "react";

export const useResize = (ref: RefObject<HTMLElement>) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width, height });
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return size;
};
