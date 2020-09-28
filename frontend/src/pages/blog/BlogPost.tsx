import React from 'react';
import { Post } from '../../services/blog-posts';
import { StyleSheet } from '../../models';

const styles: StyleSheet = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        // borderStyle: 'solid'
    },
    karma: {
        borderStyle: 'solid',
        width: 50,
        height: 50,
    },
};

type Props = Readonly<{
    post: Post;
}>;

export const BlogPost = ({ post }: Props): JSX.Element => {
    return (
        <div style={styles.container}>
            <p>{post.title}</p>
            <div style={styles.upvotes}>
                <b>{post.upvotes}</b>
            </div>
            <a href="#">
                <i className="fas fa-arrow-alt-circle-up fa-2x"></i>
            </a>
            <a href="#">
                <i className="fas fa-arrow-alt-circle-down fa-2x"></i>
            </a>
        </div>
    );
    return <p>{post.title}</p>;
};
