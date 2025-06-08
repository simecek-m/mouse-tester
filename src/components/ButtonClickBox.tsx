import { Click } from "@/App";
import { Constant } from "@/constants";
import { MousePointerClick } from "lucide-react";

type ButtonClickBoxProps = {
  clicks: Array<Click>;
  onClick: (click: Click) => void;
};

export const ButtonClickBox = ({ clicks, onClick }: ButtonClickBoxProps) => {
  const onMouseDownHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Mouse down event:", e.button);
    console.log(`${Constant.Mouse.Button[e.button]} button clicked`);
    onClick({ type: Constant.Mouse.Button[e.button], time: Date.now() });
  };

  return (
    <div
      className="h-1/2 w-1/2 aspect-square bg-white dark:bg-black justify-center items-center shadow-sm flex flex-col rounded-3xl m-4 gap-4"
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={onMouseDownHandler}
    >
      {clicks.length > 0 ? (
        <div className="flex flex-col items-center gap-2">
          {clicks.length > 0 && <span>{[clicks[clicks.length - 1].type]}</span>}
          <div className="flex flex-row gap-1 items-center">
            <span className="text-3xl text-primary font-black">
              {clicks.length}
            </span>
            <span>clicks</span>
          </div>
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
