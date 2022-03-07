import {RootState} from '@/store/rootReducer';

export const getDetail = (state: RootState) => state.user.detail;
