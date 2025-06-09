export type MouseButtonType =
  | "left"
  | "middle"
  | "right"
  | "side-bottom"
  | "side-top";

export type MouseButton = Record<number, MouseButtonType>;

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
