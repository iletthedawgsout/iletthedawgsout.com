import React from 'react';
import { Post } from '../../services/blog-posts';

type Props = Readonly<{
    post: Post;
}>;

export const BlogPost = ({ post }: Props): JSX.Element => {
    return <p>{post.source}</p>;
};
