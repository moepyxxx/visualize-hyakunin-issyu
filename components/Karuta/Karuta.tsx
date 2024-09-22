import { FC, useEffect, useState } from "react";
import { useMount } from "react-use";
import { HoverAnimatedItem } from "./HoverAnimatedItem";

type Props = {
  kaminoku: string;
  onClick: () => void;
  className?: string;
  canvasID: string;
  isHoverAnimating?: boolean;
};

export const Karuta: FC<Props> = ({
  kaminoku,
  onClick,
  className,
  canvasID,
  isHoverAnimating = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-card min-w-64 rounded overflow-hidden ${
        className ? className : ""
      }`}>
      <HoverAnimatedItem
        canvasID={canvasID}
        isHoverAnimating={isHoverAnimating}
      />
      <div className="p-3">
        <div className="bg-white rounded py-8 px-3 writing-mode-vertical-rl text-start">
          {splitStringByN(kaminoku, 5).map((line, i) => (
            <p className="text-4xl leading-loose tracking-very-wide" key={i}>
              {line}
            </p>
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
