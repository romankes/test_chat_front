import {ColorValue} from 'react-native';

type Background = {
  default: ColorValue;
};

export type Icon = {
  default: ColorValue;
};
export type Text = {
  default: ColorValue;
};
type Button = {
  background: {
    default: ColorValue;
  };
  text: {
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
