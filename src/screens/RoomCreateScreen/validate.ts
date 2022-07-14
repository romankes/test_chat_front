import {array, object, string} from 'yup';

export const schema = object({
  title: string().required('Chat name is required'),
  users: array().min(2, 'Need minimum 2 users for create room'),
});
