import {User, userActions} from '@/bus/user';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {Asset} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

export const useData = () => {
  const dispatch = useDispatch();

  const {
    control,
    formState: {errors},
    setValue,
    watch,
    handleSubmit,
  } = useForm<User.ReqUpdateDetail>({
    defaultValues: {
      avatar: null,
      name: '',
    },
  });

  const avatar = watch('avatar');

  const onSubmit = (data: User.ReqUpdateDetail) => {
    dispatch(userActions.updateDetailAsync(data));
  };

  const onUploadAvatar = useCallback((avatar: Asset) => {
    setValue('avatar', avatar);
  }, []);

  return {
    control,
    avatar,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    onUploadAvatar,
  };
};
