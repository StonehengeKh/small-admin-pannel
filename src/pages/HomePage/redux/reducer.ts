import { ActionType, createReducer } from 'typesafe-actions';
import actions from './actions';
import { Users } from '../../../types';

export type State = Users | null;

export type Action = ActionType<typeof actions>;

const users = createReducer<State, Action>([]).handleAction(
  actions.getUsers.success,
  (state, { payload }) => payload,
);

export default users;
