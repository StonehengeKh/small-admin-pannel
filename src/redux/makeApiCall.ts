import { call, put, takeLatest } from 'redux-saga/effects';
import { EmptyActionCreator, PayloadActionCreator } from 'typesafe-actions';

type Action = EmptyActionCreator<string> | PayloadActionCreator<string, any>;

function* makeApiCall<
  T extends { request: Action; success: Action; failure: Action },
>(
  action: T,
  apiRequest: (
    payload: Parameters<T['request']>[0],
  ) => Promise<Parameters<T['success']>[0]>,
  onSuccess?: (resp: Parameters<T['success']>[0]) => void,
) {
  yield takeLatest(
    action.request,
    function* ({ payload }: Parameters<T['request']>[0]) {
      try {
        // @ts-ignore
        const resp = yield call(apiRequest, payload);
        yield put(action.success(resp));
        if (onSuccess) {
          yield call(onSuccess, resp);
        }
      } catch (e) {
        yield put(action.failure(e));
      }
    },
  );
}

export default makeApiCall;
