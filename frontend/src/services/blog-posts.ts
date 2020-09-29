import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useGlobalState } from '../global-state/GlobalStateContext';

const HOST_NAME = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';
const POST_ENDPOINT = `${HOST_NAME}/api/posts`;

console.log(`POST_ENDPOINT: ${POST_ENDPOINT}`);

interface PostResponse {
    id: string;
    title: string;
    publish_date: string;
    visible: boolean;
    source: string;
    last_edited: string;
    upvotes: number;
}

export interface Post {
    id: string;
    title: string;
    publish_date: Date;
    visible: boolean;
    source: string;
    last_edited: Date;
    upvotes: number;
}

const mapToPost = (postResponse: PostResponse): Post => ({
    ...postResponse,
    publish_date: new Date(postResponse.publish_date),
    last_edited: new Date(postResponse.last_edited),
});

export const fetchBlogPosts = (): Promise<Post[]> =>
    axios
        .get<PostResponse[]>(POST_ENDPOINT)
        .then((response: AxiosResponse<PostResponse[]>) => response.data)
        .then((postResponse) => postResponse.map(mapToPost))
        .catch((error) => {
            console.log(JSON.stringify(error));
            return [];
        });

export const useFetchBlogPosts = (): Post[] | undefined => {
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
