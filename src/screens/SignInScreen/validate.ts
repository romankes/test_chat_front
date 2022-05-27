import {string, object} from 'yup';

export const schema = object().shape({
  email: string().email('Email is invalid').required('Email is required'),
  password: string().required('Password is required'),
});
