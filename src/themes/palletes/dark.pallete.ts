import type {Pallete} from './types';

const pallete: Pallete = {
  background: {
    default: '#FCFAFF',
    gray: '#F2E7FE',
    danger: '#EF4444',
    dark: '#101828',
    action: '#5600E8',
  },
  text: {
    default: '#101828',
    link: '#00B3A6',
    gray: '#475467',
    danger: '#EF4444',
    light: '#FCFAFF',
    action: '#5600E8',
  },
  icon: {
    default: '#101828',
    gray: '#afaec6',
    light: '#FCFAFF',
    action: '#5600E8',
  },
  button: {
    background: {
      default: '#5600E8',
      action: 'transparent',
    },
    text: {
      default: '#fff',
      action: '#5600E8',
    },
    border: {
      default: '#5600E8',
      action: '#5600E8',
    },
  },
  input: {
    background: {
      default: '#EEDFFE33',
      danger: '#EF444433',
      action: '#5600E8',
    },
    border: {
      default: '#EF444400',
      danger: '#EF4444',
      action: '#5600E800',
    },
    text: {
      default: '#101828',
      danger: '#101828',
      action: '#ffffff',
    },
  },
  border: {
    default: '#afaec6',
  },
};

export default pallete;
