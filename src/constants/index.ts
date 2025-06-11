export const SUPPORTED_MOUSE_BUTTONS = [0, 1, 2, 3, 4];

export type MouseButtonTypeNumber = (typeof SUPPORTED_MOUSE_BUTTONS)[number];
export type MouseButtonTypeName =
  | "left"
  | "middle"
  | "right"
  | "side-bottom"
  | "side-top";

export type MouseButton = Record<MouseButtonTypeNumber, MouseButtonTypeName>;

type Constant = {
  Mouse: {
    Button: MouseButton;
  };
  Threshold: {
    Default: number;
  };
  Links: {
    GitHub: string;
  };
};

export const Constant: Constant = {
  Mouse: {
    Button: {
      0: "left",
      1: "middle",
      2: "right",
      3: "side-bottom",
      4: "side-top",
    },
  },
  Threshold: {
    Default: 100,
  },
  Links: {
    GitHub: "https://github.com/simecek-m/tapper",
  },
};
