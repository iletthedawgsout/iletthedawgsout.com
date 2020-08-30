import { PostList } from "../services/blog-posts";

export type GlobalState = Readonly<{
    postList?: PostList
}>;
