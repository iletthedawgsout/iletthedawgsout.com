import React, { useEffect } from 'react';
import { useGlobalState } from '../global-state/GlobalStateContext';
import { fetchBlogPosts } from '../services/blog-posts';

export const Blog = (): JSX.Element => {
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

    if (postList) {
        const list = postList.results.map((post, i) => <p key={i}>{post.title}</p>);
        return <div>{list}</div>;
    }
    return <p>Blog</p>;
};
