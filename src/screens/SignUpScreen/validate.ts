import {string, object, ref} from 'yup';

export const schema = object().shape({
  email: string().email('Email is invalid').required('Email is required'),
  password: string().required('Password is required'),
  confirmPassword: string()
    .required('Password is required')
    .oneOf([ref('password'), null], 'Password don`t match'),
});
