import { ActionType, createReducer } from 'typesafe-actions';
import actions from './actions';
import { Projects } from '../../../types';

export type State = Projects | null;

export type Action = ActionType<typeof actions>;

const projects = createReducer<State, Action>([]).handleAction(
  actions.postProject,
  (state, { payload }) => payload,
);

export default projects;
