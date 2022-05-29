import {ColorValue} from 'react-native';

export type Background = {
  default: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
  dark: ColorValue;
  action: ColorValue;
};

export type Icon = {
  default: ColorValue;
  gray: ColorValue;
  light: ColorValue;
  action: ColorValue;
};
export type Text = {
  default: ColorValue;
  gray: ColorValue;
  link: ColorValue;
  danger: ColorValue;
  light: ColorValue;
  action: ColorValue;
};
type Button = {
  background: {
    default: ColorValue;
  };
  text: {
    default: ColorValue;
  };
  border: {
    default: ColorValue;
  };
};

type Input = {
  background: {
    default: ColorValue;
    danger: ColorValue;
    action: ColorValue;
  };
  text: {
    default: ColorValue;
    danger: ColorValue;
    action: ColorValue;
  };
  border: {
    default: ColorValue;
    danger: ColorValue;
    action: ColorValue;
  };
};
type Border = {
  default: ColorValue;
};

export type ButtonKeys = keyof Button['background'];
export type InputKeys = keyof Input['background'];

export type Pallete = {
  background: Background;
  text: Text;
  icon: Icon;
  button: Button;
  border: Border;
  input: Input;
};
