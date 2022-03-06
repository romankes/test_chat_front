import React, {ReactNode, useState} from 'react';

import {StatusBar, View} from 'react-native';

//app themes
import {themes, ThemeContext, ThemesName} from '@/themes/';
import {useTheme} from '@/hooks/';
import {Appearance} from 'react-native';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {themeSelectors} from '@/bus/theme';

type PropTypes = {
  children: ReactNode;
};

export const ThemeLayout: React.FC<PropTypes> = (props: PropTypes) => {
  // const colorScheme = Appearance.getColorScheme();

  const theme = useSelector(themeSelectors.getTheme);

  // const [theme, setTheme] = useState(
  //   colorScheme === 'dark' ? ThemesName.DARK : ThemesName.LIGHT,
  // );

  // const onChangeTheme = useCallback(() => {
  //   const colorScheme = Appearance.getColorScheme();

  //   console.log(colorScheme, 'colorScheme');

  //   setTheme(colorScheme === 'dark' ? ThemesName.DARK : ThemesName.LIGHT);
  // }, []);

  // useEffect(() => {
  //   Appearance.addChangeListener(onChangeTheme);
  //   return () => {
  //     Appearance.removeChangeListener(onChangeTheme);
  //   };
  // }, [onChangeTheme]);

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeLayoutContent {...props} />
    </ThemeContext.Provider>
  );
};

const ThemeLayoutContent: React.FC<PropTypes> = ({children}) => {
  const {statusBarStyle, pallete} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: pallete.background.default}}>
      <StatusBar
        barStyle={statusBarStyle}
        translucent={true}
        backgroundColor={'transparent'}
      />
      {children}
    </View>
  );
};
