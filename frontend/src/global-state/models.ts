import { Post } from '../services/blog-posts';

export type GlobalState = Readonly<{
    postList?: Post[];
    aboutMe?: string;
    blackLivesMatterMarkdown?: string;
}>;
