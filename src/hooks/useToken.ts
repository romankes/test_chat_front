import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, authSelectors } from '../bus/auth';
import { uiSelectors } from '../bus/ui';

export const useToken = () => {
    const dispatch = useDispatch();
    const isAppLoading = useSelector(uiSelectors.getLoading('app'));
    const isAccess = useSelector(authSelectors.getAccess);
    
    useEffect(() => {
        dispatch(authActions.checkTokenAsync());
    }, [])

    return {isAccess, isAppLoading}
}