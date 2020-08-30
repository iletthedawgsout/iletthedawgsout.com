import axios from 'axios';

const HOST_NAME = 'https://iletthedawgsout.azurewebsites.net';
const POST_ENDPOINT = `${HOST_NAME}/posts`;

export interface Post {
    url: string;
    title: string;
    publish_date: Date;
    visible: boolean;
    content: string;
    last_edited: Date;
    upvotes: number;
}

export interface PostList {
    count: number;
    next?: number;
    previous?: null;
    results: Post[];
}

export const fetchBlogPosts = (): Promise<PostList> =>
    axios
        .get<PostList>(POST_ENDPOINT)
        .then((response) => response.data)
        .catch((error) => console.log(JSON.stringify(error)))
        .then(() => ({
            count: 0,
            results: [],
        }));
