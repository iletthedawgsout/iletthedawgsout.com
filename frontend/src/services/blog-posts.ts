import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { FECH_POST_COMPLETE, FETCH_POST_FAILED, RootAction } from '../global-state/actions';
import { useGlobalState } from '../global-state/GlobalStateContext';
import { HOST_NAME } from './utils';

const POST_ENDPOINT = `${HOST_NAME}/api/posts`;

export interface PostResponse {
    id: string;
    title: string;
    publish_date: string;
    visible: boolean;
    imageAltText?: string;
    relativeImagePath: string;
    relativeMarkdownPath: string;
    upvotes: number;
}

export type Post = Omit<PostResponse, 'publish_date'> & {
    publish_date: Date;
    imageUrl: string;
    markdownSource: string;
};

const mapToPost = (postResponse: PostResponse, markdownSource: string): Post => ({
    ...postResponse,
    publish_date: new Date(postResponse.publish_date),
    imageUrl: `https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/${postResponse.relativeImagePath}`,
    markdownSource,
});

export const fetchBlogPosts = (): Promise<PostResponse[]> =>
    axios
        .get<PostResponse[]>(POST_ENDPOINT)
        .then((response: AxiosResponse<PostResponse[]>) => response.data)
        .catch((error) => {
            console.log(JSON.stringify(error));
            return [];
        });

export const fetchMarkdownSource = (post: PostResponse): Promise<string> =>
    axios
        .get<string>(`https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/${post.relativeMarkdownPath}`)
        .then((response: AxiosResponse<string>) => response.data);

const compositeFetch = async (dispatch: React.Dispatch<RootAction>) => {
    let postResponses: PostResponse[] = [];
    try {
        postResponses = await fetchBlogPosts();
    } catch (error) {
        dispatch({
            type: FETCH_POST_FAILED,
            error,
        });
    }

    for (const postResponse of postResponses) {
        let markdownSource = '';
        try {
            markdownSource = await fetchMarkdownSource(postResponse);
        } catch (error) {
            dispatch({
                type: FETCH_POST_FAILED,
                error,
            });
        }

        const post = mapToPost(postResponse, markdownSource);

        dispatch({
            type: FECH_POST_COMPLETE,
            post,
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
