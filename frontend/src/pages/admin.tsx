import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet } from '../models';
import { RootContainer } from '../navigation';
import { useFetchBlogPosts } from '../services/blog-posts';

const styles: StyleSheet = {
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
};

const ViewPosts = () => {
    const posts = useFetchBlogPosts() ?? [];

    const items = posts.map((post, i) => (
        <li key={i}>
            {post.title}
            <ul>
                <li>{post.publish_date.toString()}</li>
                <li>{post.imageUrl}</li>
            </ul>
        </li>
    ));

    return <ul>{items}</ul>;
};

export const Admin = (): JSX.Element => {
    return (
        <RootContainer style={styles.container}>
            <h1> Admin</h1>
            <Link to={'/'}>{'Back to home'}</Link>
            <ViewPosts />
        </RootContainer>
    );
};
