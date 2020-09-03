import axios from 'axios';
import { useEffect } from 'react';
import { useGlobalState } from '../global-state/GlobalStateContext';

let HOST_NAME = 'https://iletthedawgsout.azurewebsites.net';
HOST_NAME = 'http://localhost:8001';
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
        .then((response) => {
            console.log(JSON.stringify(response));
            return response.data;
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            return {
                count: 0,
                results: [],
            };
        });

export const useFetchBlogPosts = () => {
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
}