import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import BackBtn from '../../components/BackBtn';
import useUsers from '../HomePage/hooks/useUsers';
import NoteList from '../../components/NoteList';
import usePosts from './hooks/usePosts';

const UserPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;
  const { users } = useUsers();
  const user = users && users.find((el: any) => el.id === +id);
  const [userName] = useState(user?.name);
  const { posts, getPosts, postPost } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  const userPosts = posts && posts!.filter((el: any) => el.userId === +id);

  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const changeTime = (event: any) => {
    event.preventDefault();
    setTime(event.target.value);
  };

  const changeNote = (event: any) => {
    event.preventDefault();
    setNote(event.target.value);
  };

  const sendPost = (event: any) => {
    event.preventDefault();
    postPost({
      userId: +id,
      id: +new Date(),
      title: time,
      body: note,
    });
    getPosts();
  };

  return (
    <>
      <BackBtn />
      <h4>User - {userName}</h4>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={sendPost}
      >
        <input type={'text'} placeholder={'Add title'} onChange={changeTime} />
        <textarea placeholder={'Add your note'} onChange={changeNote} />
        <button onClick={sendPost}>Add</button>
      </form>
      <NoteList posts={userPosts} />
    </>
  );
};

export default UserPage;
