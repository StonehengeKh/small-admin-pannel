import { all } from 'redux-saga/effects';

import actions from './actions';
import PostsAPI from '../../../api/Posts';
import makeApiCall from '../../../redux/makeApiCall';

export default function* () {
  yield all([
    makeApiCall(actions.getPosts, PostsAPI.getPosts),
    makeApiCall(actions.postPost, PostsAPI.postPost),
  ]);
}
