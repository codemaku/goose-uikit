import { Colors } from "./types";

export const baseColors = {
  failure: "#222222",
  primary: "#222222",
  primaryBright: "#222222",
  primaryDark: "#222222",
  secondary: "#222222",
  success: "#222222",
  warning: "#222222",
};

export const brandColors = {
  binance: "#222222",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#222222",
  backgroundDisabled: "#222222",
  contrast: "#222222",
  invertedContrast: "#222222",
  input: "#222222",
  tertiary: "#222222",
  text: "#222222",
  textDisabled: "#222222",
  textSubtle: "#222222",
  borderColor: "#222222",
  card: "#222222",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#222222",
  background: "#222222",
  backgroundDisabled: "#222222",
  contrast: "#222222",
  invertedContrast: "#222222",
  input: "#222222",
  primaryDark: "#222222",
  tertiary: "#222222",
  text: "#222222",
  textDisabled: "#222222",
  textSubtle: "#222222",
  borderColor: "#222222",
  card: "#222222",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
