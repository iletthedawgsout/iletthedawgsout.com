import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet } from '../models';
import { RootContainer } from '../navigation';
import { useFetchBlogPosts } from '../services/blog-posts';
import { IS_PROD } from '../utils';

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
                <li>
                    <b>Publish date: </b>
                    {post.publish_date.toString()}
                </li>
                <li>
                    <b>Image path: </b>
                    {post.relativeImagePath}
                </li>
                <li>
                    <b>Markdown path: </b>
                    {post.relativeMarkdownPath}
                </li>
                <li>
                    <b>Alt image text: </b>
                    {post.imageAltText}
                </li>
                <li>
                    <b>Id: </b>
                    {post.id}
                </li>
            </ul>
        </li>
    ));

    return <ul>{items}</ul>;
};

const endpoint = IS_PROD ? '/api/posts' : 'http://localhost:8001/api/posts';

const PostMaker = () => {
    return (
        <form action={endpoint} method="post">
            <ul>
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value="Example title" />
                </li>

                <li>
                    <label htmlFor="publish_date">Start date:</label>
                    <input
                        type="date"
                        id="publish_date"
                        name="publish_date"
                        value="2018-07-22"
                        min="2018-01-01"
                        max="2018-12-31"
                        onChange={console.log}
                    />
                </li>

                <li>
                    <label htmlFor="visible">Visible</label>
                    <input type="checkbox" id="visible" name="visible" onChange={console.log} />
                </li>

                <li>
                    <label htmlFor="imgAltText">Image alt text: </label>
                    <input type="text" id="imgAltText" name="imgAltText" value="An image" />
                </li>

                <li>
                    <label htmlFor="relativeImagePath">relativeImagePath: </label>
                    <input type="text" id="relativeImagePath" name="relativeImagePath" value="/" />
                </li>

                <li>
                    <label htmlFor="relativeMarkdownPath">relativeMarkdownPath: </label>
                    <input type="text" id="relativeMarkdownPath" name="relativeMarkdownPath" value="/" />
                </li>
            </ul>

            <button type="submit">Publish new blog post</button>
        </form>
    );
};

export const Admin = (): JSX.Element => {
    return (
        <RootContainer style={styles.container}>
            <h1> Admin</h1>
            <Link to={'/'}>{'Back to home'}</Link>
            <ViewPosts />
            <PostMaker />
        </RootContainer>
    );
};
