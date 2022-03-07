import axios from '@/services/axios';
import AsyncStorage from '@react-native-community/async-storage';
import type {AxiosPromise} from 'axios';

export const apiApp = new (class Api {})();
