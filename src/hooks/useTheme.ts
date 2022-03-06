import {useContext} from 'react';
import {ThemeContext} from '@/themes';

export const useTheme = () => {
  return useContext(ThemeContext);
};
