import { FC } from "react";
import MouseLeftButtonIcon from "../assets/mouse/left-button.svg?react";
import MouseRightButtonIcon from "../assets/mouse/right-button.svg?react";
import MouseWheelIcon from "../assets/mouse/wheel.svg?react";
import { MouseButtonType } from "../constants";
import { cn } from "../helpers";

type MouseButtonIconProps = {
  type: MouseButtonType;
  isError: boolean;
};

export const MouseButtonIcon: FC<MouseButtonIconProps> = ({
  type,
  isError,
}) => {
  const className = cn("fill-primary h-24", {
    "fill-red-600 dark:fill-red-400": isError,
  });

  switch (type) {
    case "left": {
      return <MouseLeftButtonIcon className={className} />;
    }
    case "middle": {
      return <MouseWheelIcon className={className} />;
    }

    case "right": {
      return <MouseRightButtonIcon className={className} />;
    }
  }
};
