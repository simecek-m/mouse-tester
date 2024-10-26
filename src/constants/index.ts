export type MouseButtonType = "left" | "middle" | "right";

export type MouseButton = Record<MouseButtonType, number>;

interface IMouse {
  Button: MouseButton;
}

interface IConstant {
  Mouse: IMouse;
}

export const Constant: IConstant = {
  Mouse: {
    Button: {
      left: 0,
      middle: 1,
      right: 2,
    },
  },
};
