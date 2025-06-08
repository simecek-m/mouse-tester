import { Click, Clicks } from "@/App";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Constant } from "@/constants";
import { MousePointerClick } from "lucide-react";

type ButtonClickBoxProps = {
  clicks: Clicks | null;
  onClick: (click: Click) => void;
};

export const ButtonClickBox = ({ clicks, onClick }: ButtonClickBoxProps) => {
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
      className="h-1/2 w-1/2 aspect-square bg-white dark:bg-black justify-center items-center shadow-sm flex flex-col rounded-3xl m-4 gap-4"
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
                return (
                  <div className="flex flex-row gap-1">
                    <span className="w-full flex justify-end items-end">
                      {time - clicks.times[index - 1]}
                    </span>
                    <span className="opacity-50">ms</span>
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
