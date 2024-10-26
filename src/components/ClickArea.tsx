import { FC, useEffect, useState } from "react";
import { Constant, MouseButtonType } from "../constants";
import { cn } from "../helpers";

const MAX_TIMES_VISIBLE: number = 50;

interface ClickAreaProps {
  title: string;
  buttonType: MouseButtonType;
  threshold: number;
}

export const ClickArea: FC<ClickAreaProps> = ({
  title,
  buttonType,
  threshold,
}) => {
  const [count, setCount] = useState<number>(0);
  const [times, setTimes] = useState<Array<number>>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const isError = times.some((time, index) => {
      if (times.length > index + 1) {
        const prevTime: number = times[index + 1];
        const result = time - prevTime;
        return result < threshold;
      } else {
        return false;
      }
    });
    setIsError(isError);
  }, [times, threshold]);

  const mouseHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.button === Constant.Mouse.Button[buttonType]) {
      setCount((count) => count + 1);
      setTimes((original) => {
        if (original.length > MAX_TIMES_VISIBLE) {
          const shortenedArray = [...original];
          shortenedArray.pop();
          return [Date.now(), ...shortenedArray];
        } else {
          return [Date.now(), ...original];
        }
      });
    }
  };

  return (
    <div
      className="flex flex-col gap-4 bg-neutral-800 m-4 w-80 h-80 relative p-2"
      onMouseDown={(e) => mouseHandler(e)}
      onContextMenu={(e) => e.preventDefault()}
    >
      <h3
        className={cn(
          "w-450px w-full text-center text-lg bg-emerald-400 rounded-sm text-black font-semibold p-2 select-none",
          { "bg-red-500 text-white": isError }
        )}
      >
        {title}
      </h3>
      <div className="h-full overflow-auto p-2 flex flex-col items-end gutter-stable">
        {times.map((time, index) => {
          if (times.length > index + 1) {
            const prevTime: number = times[index + 1];
            const result = time - prevTime;
            return (
              <div key={index}>
                <span
                  className={cn("text-white me-1", {
                    "text-red-500 font-bold text-lg": result < threshold,
                  })}
                >
                  {result}
                </span>
                <span className="text-neutral-400">ms</span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="bg-neutral-700 p-2 text-neutral-300 rounded-sm">
        <span>You've clicked</span>
        <span className="text-white font-bold text-lg px-1">{count}</span>
        <span>times.</span>
      </div>
    </div>
  );
};
