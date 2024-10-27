import { FC, useEffect, useState } from "react";
import { Constant, MouseButtonType } from "../constants";
import { ButtonWidgetLabel } from "./ButtonWidgetLabel";
import { MouseEventLogsList } from "./MouseEventLogsList";

const MAX_TIMES_VISIBLE: number = 50;

type ButtonWidgetProps = {
  title: string;
  buttonType: MouseButtonType;
  threshold: number;
};

export const ButtonWidget: FC<ButtonWidgetProps> = ({
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
      className="flex flex-col gap-4 bg-neutral-300 dark:bg-neutral-800 w-[25vw] h-[50vh] relative p-2"
      onMouseDown={(e) => mouseHandler(e)}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex flex-row flex-grow overflow-hidden w-full">
        <ButtonWidgetLabel type={buttonType} isError={isError} count={count} />
        <MouseEventLogsList events={times} threshold={threshold} />
      </div>
      <div className="bg-neutral-100 dark:bg-neutral-700 p-2 text-neutral-700 dark:text-neutral-300 rounded-sm">
        {count > 0 ? (
          <>
            <span>You've clicked</span>
            <span className="text-black dark:text-white font-bold text-lg px-1">
              {count}
            </span>
            <span>times.</span>
          </>
        ) : (
          <span>Start by clicking in this area...</span>
        )}
      </div>
    </div>
  );
};
