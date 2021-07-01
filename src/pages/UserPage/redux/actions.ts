import getAsyncTypes from '../../../redux/getAsyncTypes';
import { Posts, Post } from '../../../types';
import { createAsyncAction } from 'typesafe-actions';

export default {
  getPosts: createAsyncAction(...getAsyncTypes('GET_POSTS'))<
    string,
    Posts,
    null
  >(),
  postPost: createAsyncAction(...getAsyncTypes('POST_POST'))<
    Post,
    Post,
    null
  >(),
};
