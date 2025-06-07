export type MouseButtonType = "left" | "middle" | "right";

export type MouseButton = Record<MouseButtonType, number>;

type Constant = {
  Mouse: {
    Button: MouseButton;
  };
  Threshold: {
    Default: number;
  };
};

export const Constant: Constant = {
  Mouse: {
    Button: {
      left: 0,
      middle: 1,
      right: 2,
    },
  },
  Threshold: {
    Default: 100,
  },
};
