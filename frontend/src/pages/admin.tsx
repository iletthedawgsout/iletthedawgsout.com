import React, {
    ChangeEventHandler,
    Dispatch,
    FormEventHandler,
    SetStateAction,
    SyntheticEvent,
    useCallback,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet } from '../models';
import { RootContainer } from '../navigation';
import { useFetchBlogPosts } from '../services/blog-posts';
import { updatePost } from '../services/admin';

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

function useTextInputState<T>(defaultValue: T): [T, ChangeEventHandler] {
    const [value, setValue] = useState<T>(defaultValue);
    const setter = useCallback((event: any) => setValue(event.target.value), [setValue]);
    return [value, setter];
}

function useCheckboxInputState<T>(defaultValue: T): [T, ChangeEventHandler] {
    const [value, setValue] = useState<T>(defaultValue);
    const setter = useCallback((event: any) => setValue(event.target.checked), [setValue]);
    return [value, setter];
}

const PostMaker = () => {
    const [title, setTitle] = useTextInputState('Example title');
    const [publish_date, setPublishDate] = useTextInputState('2018-01-01');
    const [visible, setVisible] = useCheckboxInputState(false);
    const [imageAltText, setImageAltText] = useTextInputState('An example image');
    const [relativeImagePath, setRelativeImagePath] = useTextInputState('/');
    const [relativeMarkdownPath, setRelativeMarkdownPath] = useTextInputState('/');

    const onSubmit: FormEventHandler = useCallback(
        (event) => {
            event.preventDefault();
            const post = {
                title,
                publish_date,
                visible,
                imageAltText,
                relativeImagePath,
                relativeMarkdownPath,
                upvotes: 0,
            };
            console.log(post);
            updatePost(post);
        },
        [title, publish_date, visible, imageAltText, relativeImagePath, relativeMarkdownPath],
    );

    return (
        <form onSubmit={onSubmit}>
            <ul>
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" value={title} onChange={setTitle} />
                </li>

                <li>
                    <label htmlFor="publish_date">Start date:</label>
                    <input
                        type="date"
                        id="publish_date"
                        name="publish_date"
                        value={publish_date}
                        min="2018-01-01"
                        max="2018-12-31"
                        onChange={setPublishDate}
                    />
                </li>

                <li>
                    <label htmlFor="visible">Visible</label>
                    <input type="checkbox" id="visible" name="visible" checked={visible} onChange={setVisible} />
                </li>

                <li>
                    <label htmlFor="imgAltText">Image alt text: </label>
                    <input
                        type="text"
                        id="imgAltText"
                        name="imgAltText"
                        value={imageAltText}
                        onChange={setImageAltText}
                    />
                </li>

                <li>
                    <label htmlFor="relativeImagePath">relativeImagePath: </label>
                    <input
                        type="text"
                        id="relativeImagePath"
                        name="relativeImagePath"
                        value={relativeImagePath}
                        onChange={setRelativeImagePath}
                    />
                </li>

                <li>
                    <label htmlFor="relativeMarkdownPath">relativeMarkdownPath: </label>
                    <input
                        type="text"
                        id="relativeMarkdownPath"
                        name="relativeMarkdownPath"
                        value={relativeMarkdownPath}
                        onChange={setRelativeMarkdownPath}
                    />
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
