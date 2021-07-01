import React from 'react';

import { Posts } from '../../types';
import useRouter from '../../hooks/useRouter';

type Props = {
  posts: Posts | null;
};

const NoteList: React.FC<Props> = ({ posts }) => {
  const { push } = useRouter();

  const choicePost = (id: number | undefined) => () => push(`/note/${id}`);

  return (
    <>
      {posts &&
        posts!.map(({ id, title }) => (
          <div
            key={id}
            onClick={choicePost(id)}
            style={{ margin: '5px 0', cursor: 'pointer' }}
          >
            <span>{title}</span>
          </div>
        ))}
    </>
  );
};

export default NoteList;
