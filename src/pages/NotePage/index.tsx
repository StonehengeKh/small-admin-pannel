import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import usePosts from '../UserPage/hooks/usePosts';

const NotePage: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { id } = match.params;
  const { posts } = usePosts();
  const post: any = posts && posts!.find((el: any) => el.id === +id);

  return (
    <>
      <BackBtn />
      <h3>Note Page</h3>
      <h4>{post && post.title}</h4>
      <span>{post && post.body}</span>
    </>
  );
};

export default NotePage;
