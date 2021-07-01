import { actions } from '../redux';
import useDispatchActions from '../../../hooks/useDispatchActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const usePosts = () => {
  const posts = useTypedSelector((state) => state.posts);

  const getPosts = useDispatchActions(actions.getPosts.request);

  const postPost = useDispatchActions(actions.postPost.request);

  return {
    posts,
    getPosts,
    postPost,
  };
};
export default usePosts;
