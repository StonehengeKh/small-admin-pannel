import { actions } from '../redux';
import useDispatchActions from '../../../hooks/useDispatchActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const useUsers = () => {
  const users = useTypedSelector((state) => state.users);

  const getUsers = useDispatchActions(actions.getUsers.request);

  return {
    users,
    getUsers,
  };
};
export default useUsers;
