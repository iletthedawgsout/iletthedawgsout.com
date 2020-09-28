import { Post } from '../services/blog-posts';

export const FECH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

interface FetchPostsComplete {
    type: typeof FECH_POSTS_COMPLETE;
    postList: Post[];
}

export type RootAction = FetchPostsComplete;
