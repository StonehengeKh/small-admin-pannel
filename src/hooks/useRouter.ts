import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { push, goBack } from 'connected-react-router';
import { useTypedSelector } from './useTypedSelector';

const useRouter = () => {
  const dispatch = useDispatch();
  const router = useTypedSelector((state) => state.router);

  const dispatchPush = useCallback(
    (route: string) => {
      dispatch(push(route));
    },
    [dispatch],
  );

  const dispatchGoBack = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);

  return { ...router, push: dispatchPush, goBack: dispatchGoBack };
};

export default useRouter;
