import { spawn } from 'redux-saga/effects';
import { saga as users } from '../pages/HomePage/redux';
import { saga as posts } from '../pages/UserPage/redux';

export default function* rootSaga() {
  yield spawn(users);
  yield spawn(posts);
}
