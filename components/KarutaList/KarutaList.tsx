import BgImage from "@/app/public/bg.png";
import { Karuta } from "../Karuta";
import { useSprings, animated } from "@react-spring/web";

const SampleKarutas: Array<{
  kaminoku: string;
  rotate: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  isMiddle?: boolean;
}> = [
  {
    kaminoku: "わかころもてにゆきはふりつつ",
    rotate: 10,
    top: -10,
    left: -10,
  },
  {
    kaminoku: "からくれなゐにみずくくるとは",
    rotate: -3,
    top: -10,
    isMiddle: true,
  },
  {
    kaminoku: "くもれにしよはのつきかな",
    rotate: -6,
    top: -15,
    right: -10,
  },
  {
    kaminoku: "われてもすへにあはむとぞおもふ",
    rotate: -8,
    bottom: -15,
    left: -5,
  },
  {
    kaminoku: "ころもかたしきひとりかもねむ",
    rotate: 1,
    bottom: -10,
    isMiddle: true,
  },
  {
    kaminoku: "なほあまりあるむかしなりけり",
    rotate: 10,
    bottom: -10,
    right: -20,
  },
];

export const KarutaList = () => {
  const springs = useSprings(
    SampleKarutas.length,
    SampleKarutas.map(({ isMiddle, rotate }, index) => {
      const middleStyle = isMiddle != null ? "translateX(-50%)" : "";
      const rotateStyle = `rotate(${rotate}deg)`;

      const mergedClasses = [middleStyle, rotateStyle]
        .filter((style) => style !== "")
        .join(" ");

      switch (index) {
        case 0:
          return {
            from: {
              transform: `translateX(-100px) ${mergedClasses}`,
              opacity: 0,
            }, // 左ななめ上から
            to: { transform: `translateX(0) ${mergedClasses}`, opacity: 1 },
          };
        case 1:
          return {
            from: {
              transform: `translateY(-100px) ${mergedClasses}`,
              opacity: 0,
            }, // 左真ん中上から
            to: { transform: `translateY(0) ${mergedClasses}`, opacity: 1 },
          };
        case 2:
          return {
            from: {
              transform: `translateX(100px) ${mergedClasses}`,
              opacity: 0,
            }, // 右ななめ上から
            to: { transform: `translateX(0) ${mergedClasses}`, opacity: 1 },
          };
        case 3:
          return {
            from: {
              transform: `translateX(-100px) ${mergedClasses}`,
              opacity: 0,
            }, // 左真ん中下から
            to: { transform: `translateX(0) ${mergedClasses}`, opacity: 1 },
          };
        case 4:
          return {
            from: {
              transform: `translateY(100px) ${mergedClasses}`,
              opacity: 0,
            }, // 左真ん中下から
            to: { transform: `translateY(0) ${mergedClasses}`, opacity: 1 },
          };
        case 5:
          return {
            from: {
              transform: `translateX(100px) ${mergedClasses}`,
              opacity: 0,
            }, // 右真ん中下から
            to: { transform: `translateX(0) ${mergedClasses}`, opacity: 1 },
          };
        default:
          return {};
      }
    })
  );

  return (
    <div
      className="h-screen w-screen relative bg-texture overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage.src})`,
      }}>
      <div className="absolute w-screen h-screen top-0 left-0">
        {SampleKarutas.map(
          ({ kaminoku, top, left, bottom, right, isMiddle }, i) => {
            const styles: React.CSSProperties = {
              position: "absolute",
              top: top != null ? `${top}px` : undefined,
              left: left != null ? `${left}px` : isMiddle ? "50%" : undefined,
              bottom: bottom != null ? `${bottom}px` : undefined,
              right: right != null ? `${right}px` : undefined,
            };
            return (
              <animated.div
                key={i}
                style={{
                  ...styles,
                  ...springs[i],
                }}>
                <Karuta kaminoku={kaminoku} onClick={() => null} />
              </animated.div>
            );
          }
        )}
      </div>
    </div>
  );
};
