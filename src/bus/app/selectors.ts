import {RootState} from '@/store/rootReducer';

export const getBottomTab = (state: RootState) => state.app.isBottomTab;
export const getInitialized = (state: RootState) => state.app.initialized;
