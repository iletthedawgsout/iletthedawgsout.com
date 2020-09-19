import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useGlobalState } from '../global-state/GlobalStateContext';

const HOST_NAME = process.env.NODE_ENV === 'production' ? 'https://api.iletthedawgsout.com' : 'http://localhost:8001';
const POST_ENDPOINT = `${HOST_NAME}/posts`;

console.log(`HOST_NAME: ${HOST_NAME}`);

export interface Post {
    url: string;
    title: string;
    publish_date: Date;
    visible: boolean;
    source: string;
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
        .then((response: AxiosResponse<PostList>) => {
            return response.data;
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            return {
                count: 0,
                results: [],
            };
        });

export const useFetchBlogPosts = (): PostList | undefined => {
    const [{ postList }, dispatch] = useGlobalState();
    useEffect(() => {
        if (!postList) {
            fetchBlogPosts().then((posts) =>
                dispatch({
                    type: 'FETCH_POSTS_COMPLETE',
                    postList: posts,
                }),
            );
        }
    }, [dispatch, postList]);
    return postList;
};
