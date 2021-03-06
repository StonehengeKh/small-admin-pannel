import React, { useEffect } from 'react';

import useUsers from './hooks/useUsers';
import useRouter from '../../hooks/useRouter';
import BackBtn from "../../components/BackBtn";

const ListPage = () => {
  const { getUsers, users } = useUsers();
  const { push } = useRouter();

  const choiceUser = (id: number) => push(`/user/${id}`);

  useEffect(() => {
    getUsers();
  }, []);

  const onSelectUser = (event: any) => {
    const userId = event.target.value;
    if (!!userId) {
      choiceUser(userId);
    }
  };

  return (
    <>
      <BackBtn />
      <h4>Choice a user</h4>
      <select onChange={onSelectUser}>
        <option value={''}>---</option>
        {users &&
          users.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
    </>
  );
};

export default ListPage;
