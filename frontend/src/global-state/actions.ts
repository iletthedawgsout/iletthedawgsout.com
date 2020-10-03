import { Post } from '../services/blog-posts';

export const FECH_POST_COMPLETE = 'FETCH_POST_COMPLETE';
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED';

export const FETCH_ABOUT_ME_COMPLETE = 'FETCH_ABOUT_ME_COMPLETE';
export const FETCH_ABOUT_ME_FAILED = 'FETCH_ABOUT_ME_FAILED';

interface FetchPostComplete {
    type: typeof FECH_POST_COMPLETE;
    post: Post;
}

interface FetchPostFailed {
    type: typeof FETCH_POST_FAILED;
    error: Error;
}

interface FetchAboutMeComplete {
    type: typeof FETCH_ABOUT_ME_COMPLETE;
    markdown: string;
}

interface FetchAboutMeFailed {
    type: typeof FETCH_ABOUT_ME_FAILED;
    error: Error;
}

export type RootAction = FetchPostComplete | FetchPostFailed | FetchAboutMeComplete | FetchAboutMeFailed;
