import {RootState} from '@/store/rootReducer';

export const getLoggined = (state: RootState) => state.auth.loggined;
