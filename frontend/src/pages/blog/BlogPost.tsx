import React from 'react';
import { Post } from '../../services/blog-posts';
import { StyleSheet } from '../../models';
import ReactMarkdown from 'react-markdown';

const styles: StyleSheet = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        borderStyle: 'solid',
    },
    title: {},
    publish_date: {},
    image: {
        flex: 1,
        display: 'flex',
        // width: 1000,
        // height: 600,
        borderStyle: 'dotted',
    },
};

type Props = Readonly<{
    post: Post;
}>;

export const BlogPost = ({ post }: Props): JSX.Element => {
    return (
        <div style={styles.container}>
            <p style={styles.title}>{post.title}</p>
            <p style={styles.publish_date}>{post.publish_date.toLocaleDateString()}</p>
            <img src={post.imageUrl} alt={post.imageAltText} style={styles.image}></img>
            {post.markdownSource && <ReactMarkdown source={post.markdownSource} />}
    </div>
    );
};
