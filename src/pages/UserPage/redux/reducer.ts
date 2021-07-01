import { ActionType, createReducer } from 'typesafe-actions';
import actions from './actions';
import { Posts } from '../../../types';

export type State = Posts | null;

export type Action = ActionType<typeof actions>;

const posts = createReducer<State, Action>([]).handleAction(
  actions.getPosts.success,
  (state, { payload }) => payload,
);

export default posts;
