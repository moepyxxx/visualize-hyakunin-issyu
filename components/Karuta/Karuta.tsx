import { FC } from "react";

type Props = {
  kaminoku: string;
  onClick: () => void;
  rotate?: number;
};

export const Karuta: FC<Props> = ({ kaminoku, onClick, rotate = 0 }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-card rounded p-3 rotate-[${rotate}deg]`}>
      <div className="bg-white rounded py-8 px-3 writing-mode-vertical-rl text-start">
        {splitStringByN(kaminoku, 5).map((line, i) => (
          <p className="text-4xl leading-loose tracking-very-wide" key={i}>
            {line}
          </p>
        ))}
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
