import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { FECH_POST_COMPLETE, FETCH_POST_FAILED, RootAction } from '../global-state/actions';
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
    id: number;
    title: string;
    publish_date: Date;
    visible: boolean;
    source: string;
    last_edited: Date;
    upvotes: number;

    markdown?: string;
}

const mapToPost = (postResponse: PostResponse): Post => ({
    ...postResponse,
    id: parseInt(postResponse.id, 10),
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

export const fetchMarkdown = (post: Post): Promise<string> =>
    axios.get<string>(post.source).then((response: AxiosResponse<string>) => response.data);

const compositeFetch = async (dispatch: React.Dispatch<RootAction>) => {
    let posts: Post[] = [];
    try {
        posts = await fetchBlogPosts();
    } catch (error) {
        dispatch({
            type: FETCH_POST_FAILED,
            error,
        });
    }

    for (const post of posts) {
        let markdown;
        try {
            markdown = await fetchMarkdown(post);
        } catch (error) {
            dispatch({
                type: FETCH_POST_FAILED,
                error,
            });
        }

        dispatch({
            type: FECH_POST_COMPLETE,
            post: {
                ...post,
                markdown,
            },
        });
    }
};

export const useFetchBlogPosts = (): Post[] | undefined => {
    const [{ postList }, dispatch] = useGlobalState();
    useEffect(() => {
        if (!postList) {
            compositeFetch(dispatch);
        }
    }, [dispatch, postList]);
    return postList;
};
