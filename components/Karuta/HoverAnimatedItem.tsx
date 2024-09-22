import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useMount } from "react-use";

type Props = {
  canvasID: string;
  isHoverAnimating: boolean;
};
export const HoverAnimatedItem: FC<Props> = ({
  canvasID,
  isHoverAnimating,
}) => {
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const hoverFrameRef = useRef<number>(0);
  const hoverAnimationIDRef = useRef<number | null>(null);

  const animateHover = useCallback(() => {
    if (!context || !isHoverAnimating) return;

    console.log("animateHover frame:", hoverFrameRef.current);

    hoverFrameRef.current += 1;
    hoverAnimationIDRef.current = requestAnimationFrame(animateHover);
  }, [context, isHoverAnimating]);

  useEffect(() => {
    if (context && isHoverAnimating) {
      hoverFrameRef.current = 0;
      hoverAnimationIDRef.current = requestAnimationFrame(animateHover);
    } else {
      if (hoverAnimationIDRef.current) {
        cancelAnimationFrame(hoverAnimationIDRef.current);
      }
      hoverFrameRef.current = 0;
    }

    return () => {
      if (hoverAnimationIDRef.current) {
        console.log("cancel!");
        cancelAnimationFrame(hoverAnimationIDRef.current);
        hoverAnimationIDRef.current = null;
      }
    };
  }, [context, isHoverAnimating, animateHover]);

  useMount(() => {
    const canvas = document.getElementById(canvasID) as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    setContext(canvasContext);
  });

  return <canvas id={canvasID} className="absolute w-full h-full" />;
};
