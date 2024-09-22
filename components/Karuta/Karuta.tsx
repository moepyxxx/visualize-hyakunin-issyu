import { FC, useState } from "react";
import { HoverAnimatedItem } from "./HoverAnimatedItem";
import { useSpring, animated } from "@react-spring/web";

type Props = {
  kaminoku: string;
  onClick: () => void;
  className?: string;
  canvasID: string;
};

export const Karuta: FC<Props> = ({
  kaminoku,
  onClick,
  className,
  canvasID,
}) => {
  const [isHoverAnimating, setIsHoverAnimating] = useState(false);

  const hoverSpring = useSpring({
    from: { color: "#012607" },
    to: { color: "#F7F5F3" },
    config: { duration: 1000 },
  });

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHoverAnimating(true)}
      onMouseLeave={() => setIsHoverAnimating(false)}
      className={`bg-card min-w-64 rounded overflow-hidden relative ${
        className ? className : ""
      }`}>
      <HoverAnimatedItem
        canvasID={canvasID}
        isHoverAnimating={isHoverAnimating}
      />
      <div className="p-3">
        <div className="bg-white rounded py-8 px-3 writing-mode-vertical-rl text-start">
          {splitStringByN(kaminoku, 5).map((line, i) => (
            <animated.p
              className="text-4xl leading-loose tracking-very-wide relative z-10"
              style={isHoverAnimating ? hoverSpring : undefined}
              key={i}>
              {line}
            </animated.p>
          ))}
        </div>
      </div>
    </button>
  );
};

function splitStringByN(str: string, n: number): string[] {
  const result = [];

  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }

  return result;
}
