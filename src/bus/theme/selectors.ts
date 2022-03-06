import {RootState} from '@/store/rootReducer';

export const getTheme = (state: RootState) => state.theme.theme;
