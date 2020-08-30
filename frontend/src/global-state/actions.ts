import { PostList } from '../services/blog-posts';

export const FECH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

interface FetchPostsComplete {
    type: typeof FECH_POSTS_COMPLETE;
    postList: PostList;
}

export type RootAction = FetchPostsComplete;
