import {ColorValue} from 'react-native';

export type Background = {
  default: ColorValue;
  gray: ColorValue;
  danger: ColorValue;
};

export type Icon = {
  default: ColorValue;
  gray: ColorValue;
};
export type Text = {
  default: ColorValue;
  gray: ColorValue;
  link: ColorValue;
  danger: ColorValue;
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
  };
  text: {
    default: ColorValue;
    danger: ColorValue;
  };
  border: {
    default: ColorValue;
    danger: ColorValue;
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
