import axios from 'axios';
import { PostResponse } from './blog-posts';
import { HOST_NAME } from './utils';

const POST_ENDPOINT = `${HOST_NAME}/api/posts`;

type Post = Omit<PostResponse, 'id'>;

export const updatePost = (post: Post): Promise<string> =>
    axios
        .post(POST_ENDPOINT, post)
        .then((response) => response.data)
        .then((post) => {
            console.log(post);
            return post;
        });
