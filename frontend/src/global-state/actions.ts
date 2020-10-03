import { Post } from '../services/blog-posts';

export const FECH_POST_COMPLETE = 'FETCH_POST_COMPLETE';

interface FetchPostComplete {
    type: typeof FECH_POST_COMPLETE;
    post: Post;
}

export type RootAction = FetchPostComplete;
