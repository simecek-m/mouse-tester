export type MouseButtonType = "left" | "middle" | "right";

export type MouseButton = Record<MouseButtonType, number>;

type Mouse = {
  Button: MouseButton;
};

type Constant = {
  Mouse: Mouse;
};

export const Constant: Constant = {
  Mouse: {
    Button: {
      left: 0,
      middle: 1,
      right: 2,
    },
  },
};
