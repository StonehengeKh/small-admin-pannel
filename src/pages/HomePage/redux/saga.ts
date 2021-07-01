import { all } from 'redux-saga/effects';

import actions from './actions';
import UsersAPI from '../../../api/Users';
import makeApiCall from '../../../redux/makeApiCall';

export default function* () {
  yield all([makeApiCall(actions.getUsers, UsersAPI.getUsers)]);
}
