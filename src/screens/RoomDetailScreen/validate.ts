import {object, string} from 'yup';

export const schema = object({
  text: string().required('required'),
});
