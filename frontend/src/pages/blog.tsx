import React, { useEffect, useState } from 'react';
import { fetchBlogPosts, PostList } from '../services/blog-posts';

export const Blog = (): JSX.Element => {
    const [posts, setPosts] = useState<PostList>();
    useEffect(() => {
        fetchBlogPosts().then(setPosts);
    }, []);

    console.log(JSON.stringify(posts));

    if (posts) {
        const list = posts.results.map((post, i) => <p key={i}>{post.title}</p>);
        return <div>{list}</div>;
    }
    return <p>Blog</p>;
};
