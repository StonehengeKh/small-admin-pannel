import API from './API';

import { Post } from '../types';

class Posts extends API {
  getPosts = () => this.get('/posts');
  postPost = (post: Post) => this.post('/posts', post);
}

export default new Posts();
