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
  dark: ColorValue;
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

export type ButtonKeys = {
  default: ColorValue;
  outline: ColorValue;
  danger: ColorValue;
  success: ColorValue;
  disable: ColorValue;
};

export type InputKeys = {
  default: ColorValue;
  danger: ColorValue;
  action: ColorValue;
};

type Button = {
  background: ButtonKeys;
  text: ButtonKeys;
  border: ButtonKeys;
};

type Input = {
  background: InputKeys;
  text: InputKeys;
  border: InputKeys;
};

type Border = {
  default: ColorValue;
  light: ColorValue;
  action: ColorValue;
};

type SwitchValues = [ColorValue, ColorValue];

export type SwitchKeys = {
  default: SwitchValues;
};

type Switch = {
  track: SwitchKeys;
  thumb: SwitchKeys;
};

export type Pallete = {
  background: Background;
  text: Text;
  icon: Icon;
  button: Button;
  border: Border;
  input: Input;
  switch: Switch;
};
