import {ColorValue} from 'react-native';

type Background = {
  default: ColorValue;
};

export type Icon = {
  default: ColorValue;
  gray: ColorValue;
};
export type Text = {
  default: ColorValue;
  gray: ColorValue;
  link: ColorValue;
};
type Button = {
  background: {
    default: ColorValue;
    action: ColorValue;
  };
  text: {
    action: ColorValue;
    default: ColorValue;
  };
};
type Border = {
  default: ColorValue;
};

export type ButtonKeysIcon = keyof Button['background'];

export type Pallete = {
  background: Background;
  text: Text;
  icon: Icon;
  button: Button;
  border: Border;
};
