import type {AxiosPromise} from 'axios';

import axios from '@/services/axios';
import type {Theme} from './namespace';
import AsyncStorage from '@react-native-community/async-storage';

export const apiTheme = new (class Api {
  fetchTheme() {
    return AsyncStorage.getItem('THEME');
  }
  setTheme(theme: Theme.Theme): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.setItem('THEME', theme);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }
})();
