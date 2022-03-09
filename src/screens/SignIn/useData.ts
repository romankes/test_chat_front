import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {schema} from './validate';
import {Auth, authActions} from '@/bus/auth';
import {uiSelectors} from '@/bus/ui';

export const useData = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(uiSelectors.getLoading('sign_in'));

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<Auth.ReqSignIn>({
    defaultValues: {
      email: 'admin@admin.com',
      password: 'polopolo',
    },
  });

  const onSubmit = (data: Auth.ReqSignIn) => {
    dispatch(authActions.signUpAsync(data));
  };

  return {isLoading, handleSubmit: handleSubmit(onSubmit), errors, control};
};
