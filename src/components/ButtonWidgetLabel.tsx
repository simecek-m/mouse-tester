import { FC } from "react";
import { MouseButtonType } from "../constants";
import { MouseButtonIcon } from "./MouseButtonIcon";

interface ButtonWidgetLabelProps {
  type: MouseButtonType;
  isError: boolean;
  count: number;
}

export const ButtonWidgetLabel: FC<ButtonWidgetLabelProps> = ({
  type,
  isError,
  count,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {count == 0 && (
        <span className="mb-8 text-black dark:text-white font-bold text-lg text-center">
          Start by clicking {type} button here...
        </span>
      )}
      {count == 1 && (
        <span className="mb-8 text-black dark:text-white font-bold text-lg">
          One more time!
        </span>
      )}
      <div>
        {isError && (
          <div className="dark:bg-red-500 bg-red-600 font-bold mb-4 text-lg text-center px-4 py-2 text-white dark:text-black rounded-xl">
            Double click!
          </div>
        )}
        <MouseButtonIcon type={type} isError={isError} />
      </div>
    </div>
  );
};
