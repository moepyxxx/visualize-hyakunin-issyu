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
    draw();

    hoverFrameRef.current += 1;
    hoverAnimationIDRef.current = requestAnimationFrame(animateHover);
  }, [context, isHoverAnimating]);

  const clearCanvas = useCallback(() => {
    if (!context) {
      return;
    }

    console.log("clear!!");

    const canvas = context.canvas;
    const width = canvas.width;
    const height = canvas.height;

    context.fillStyle = "rgba(0, 0, 0, 0)";
    context.clearRect(0, 0, width, height);
  }, [context]);

  const draw = useCallback(() => {
    if (!context) return;

    const canvas = context.canvas;
    const width = canvas.width;
    const height = canvas.height;

    context.clearRect(0, 0, width, height);

    if (hoverFrameRef.current < 50) {
      const opacity = (hoverFrameRef.current / 50) * 0.8;
      context.fillStyle = `rgba(231, 116, 10, ${opacity})`;
    } else {
      context.fillStyle = "rgba(231, 116, 10, 0.8)";
    }
    context.fillRect(0, 0, width, height);

    // const x = width / 2;
    // const y = height / 2;
    // const radius = Math.min(width, height) / 4;
    // const startAngle = 0;
    // const endAngle = (Math.PI / 180) * (hoverFrameRef.current * 10);
    // const anticlockwise = false;

    // context.beginPath();
    // context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    // context.fillStyle = "rgba(255, 255, 255, 0.5)";
    // context.fill();
  }, [context, hoverFrameRef]);

  useEffect(() => {
    if (!context) return;
    if (isHoverAnimating) {
      hoverFrameRef.current = 0;
      hoverAnimationIDRef.current = requestAnimationFrame(animateHover);
    } else {
      hoverFrameRef.current = 0;
      clearCanvas();
    }

    return () => {
      if (hoverAnimationIDRef.current) {
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
