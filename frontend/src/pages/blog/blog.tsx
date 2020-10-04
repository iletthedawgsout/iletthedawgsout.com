import React from 'react';
import { useFetchBlogPosts } from '../../services/blog-posts';
import { BlogPost } from './BlogPost';

export const Blog = (): JSX.Element => {
    const postList = useFetchBlogPosts();

    if (postList) {
        const list = postList.map((post, i) => <BlogPost post={post} key={i} />);
        return <div>{list}</div>;
    }
    return <p>Blog</p>;
};
