import React from 'react';
import { useFetchBlogPosts } from '../services/blog-posts';

export const Blog = (): JSX.Element => {
    const postList = useFetchBlogPosts();

    if (postList) {
        const list = postList.results.map((post, i) => <p key={i}>{post.title}</p>);
        return <div>{list}</div>;
    }
    return <p>Blog</p>;
};
