import { Post } from '../services/blog-posts';

export const FECH_POST_COMPLETE = 'FETCH_POST_COMPLETE';
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED';

interface FetchPostComplete {
    type: typeof FECH_POST_COMPLETE;
    post: Post;
}

interface FetchPostFailed {
    type: typeof FETCH_POST_FAILED;
    error: Error;
}

export type RootAction = FetchPostComplete | FetchPostFailed;
