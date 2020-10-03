import React from 'react';
import { Post } from '../../services/blog-posts';
import { StyleSheet } from '../../models';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph';

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
};

type Props = Readonly<{
    post: Post;
}>;

export const BlogPost = ({ post }: Props): JSX.Element => {
    return (
        <div style={styles.container}>
            <p style={styles.title}>{post.title}</p>
            <p style={styles.publish_date}>{post.publish_date.toLocaleDateString()}</p>
            {post.markdown && <ReactMarkdown source={post.markdown} /> }
        </div>
    );
};
