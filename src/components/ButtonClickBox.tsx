import { Click, Clicks } from "@/App";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Constant } from "@/constants";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";

type ButtonClickBoxProps = {
  clicks: Clicks | null;
  onClick: (click: Click) => void;
  threshold: number;
};

export const ButtonClickBox = ({
  threshold,
  clicks,
  onClick,
}: ButtonClickBoxProps) => {
  const onMouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Mouse down event:", e.button);
    console.log(`${Constant.Mouse.Button[e.button]} button clicked`);
    onClick({
      type: Constant.Mouse.Button[e.button],
      times: Date.now(),
    });
  };

  return (
    <div
      className="flex flex-row h-full w-full max-h-1/2 max-w-4xl md:max-h-[600px] bg-white dark:bg-black shadow-sm justify-center items-center rounded-4xl"
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={onMouseDownHandler}
    >
      {clicks && clicks?.times.length > 0 ? (
        <div className="flex flex-row justify-between w-full h-full overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-2 grow-1">
            <span>{clicks.type}</span>
            <div className="flex flex-row gap-1 items-center">
              <span className="text-3xl text-primary font-black">
                {clicks.times.length}
              </span>
              <span>clicks</span>
            </div>
          </div>
          <ScrollArea className="px-8 m-2">
            {clicks.times.map((time, index) => {
              if (index > 0) {
                const timeBetweenClicks = clicks.times[index - 1] - time;
                return (
                  <div className="flex flex-row gap-1 items-end">
                    <span
                      className={cn("w-full flex justify-end items-end", {
                        "text-red-600 dark:text-red-500 font-bold text-lg":
                          timeBetweenClicks < threshold,
                      })}
                    >
                      {timeBetweenClicks}
                    </span>
                    <span className="opacity-50 text-sm">ms</span>
                  </div>
                );
              }
            })}
          </ScrollArea>
        </div>
      ) : (
        <>
          <MousePointerClick className="w-24 h-24 text-primary" />
          <span className="italic">click here</span>
        </>
      )}
    </div>
  );
};
