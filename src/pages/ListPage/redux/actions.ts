import getAsyncTypes from '../../../redux/getAsyncTypes';
import { Users } from '../../../types';
import { createAsyncAction } from 'typesafe-actions';

export default {
  getUsers: createAsyncAction(...getAsyncTypes('GET_USERS'))<
    string,
    Users,
    null
  >(),
};
