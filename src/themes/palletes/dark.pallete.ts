import type {Pallete} from './types';

const pallete: Pallete = {
  background: {
    default: '#ffffff',
    gray: '#D9D9D9',
    danger: '#E34F4F',
    dark: '#011E36',
    action: '#E38664',
  },
  text: {
    default: '#011E36',
    link: '#5BA0BF',
    gray: '#475467',
    danger: '#E34F4F',
    light: '#FCFAFF',
    action: '#5600E8',
  },
  icon: {
    default: '#fff',
    gray: '#afaec6',
    dark: '#011E36',
    action: '#E38664',
  },
  button: {
    background: {
      default: '#E38664',
      outline: '#fff',
      danger: '#fff',
      success: '#fff',
      disable: '#D9D9D9',
    },
    text: {
      default: '#fff',
      outline: '#E38664',
      danger: '#E34F4F',
      success: '#17D034',
      disable: '#FFFFFF',
    },
    border: {
      default: '#E38664',
      outline: '#E38664',
      danger: '#E34F4F',
      success: '#17D034',
      disable: '#D9D9D9',
    },
  },
  input: {
    background: {
      default: '#E3866440',
      danger: '#E34F4F33',
      action: '#5600E8',
    },
    border: {
      default: '#E34F4F00',
      danger: '#E34F4F',
      action: '#5600E800',
    },
    text: {
      default: '#011E36',
      danger: '#011E36',
      action: '#ffffff',
    },
  },
  border: {
    default: '#afaec6',
    light: '#fff',
    action: '#E38664',
  },
  switch: {
    thumb: {
      default: ['#D0D0D0', '#E38664'],
    },
    track: {
      default: ['#EDEDED', '#FFA566'],
    },
  },
};

export default pallete;
