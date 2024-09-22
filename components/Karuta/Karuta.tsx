import { FC } from "react";

type Props = {
  kaminoku: string;
  onClick: () => void;
  className?: string;
};

export const Karuta: FC<Props> = ({ kaminoku, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-card min-w-64 rounded p-3 ${className ? className : ""}`}>
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
