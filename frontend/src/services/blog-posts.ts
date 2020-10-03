import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { FECH_POST_COMPLETE, FETCH_POST_FAILED, RootAction } from '../global-state/actions';
import { useGlobalState } from '../global-state/GlobalStateContext';
import { HOST_NAME } from './utils';

const POST_ENDPOINT = `${HOST_NAME}/api/posts`;

interface PostResponse {
    id: string;
    title: string;
    publish_date: string;
    visible: boolean;
    imagePath: string;
    markdownPath: string;
    last_edited: string;
    upvotes: number;
}

export interface Post {
    id: number;
    title: string;
    publish_date: Date;
    visible: boolean;
    imageUrl: string;
    last_edited: Date;
    upvotes: number;

    // Markdown source
    markdownSource: string;
}

const mapToPost = (postResponse: PostResponse): Post => ({
    id: parseInt(postResponse.id, 10),
    title: postResponse.title,
    publish_date: new Date(postResponse.publish_date),
    visible: postResponse.visible,
    imageUrl: `https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/${postResponse.imagePath}`,
    last_edited: new Date(postResponse.last_edited),
    upvotes: postResponse.upvotes,
    markdownSource: postResponse.markdownPath,
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

export const fetchMarkdownSource = (post: Post): Promise<string> =>
    axios
        .get<string>(`https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/${post.markdownSource}`)
        .then((response: AxiosResponse<string>) => response.data);

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
        let markdownSource = post.markdownSource;
        try {
            markdownSource = await fetchMarkdownSource(post);
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
                markdownSource,
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
