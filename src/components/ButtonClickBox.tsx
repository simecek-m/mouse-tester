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
      className="w-1/2 aspect-square bg-white dark:bg-black justify-center items-center shadow-sm flex flex-col rounded-3xl m-4 gap-4"
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={onMouseDownHandler}
    >
      {clicks.length > 0 ? (
        <>
          <span>{clicks.length} click</span>
          {clicks.length > 0 && (
            <span>{[clicks[clicks.length - 1].type]} click</span>
          )}
        </>
      ) : (
        <>
          <MousePointerClick className="w-24 h-24 text-primary" />
          <span className="italic">click here</span>
        </>
      )}
    </div>
  );
};
