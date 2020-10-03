import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useAboutMe } from '../services/about-me';

export const About = (): JSX.Element => {
    const markdown = useAboutMe();
    if (markdown) {
        return <ReactMarkdown source={markdown} />;
    }
    return <div></div>;
};
