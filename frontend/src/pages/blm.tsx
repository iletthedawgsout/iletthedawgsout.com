import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useBlackLivesMatter } from '../services/black-lives-matter';

export const BlackLivesMatter = (): JSX.Element => {
    const markdown = useBlackLivesMatter();
    if (markdown) {
        return <ReactMarkdown source={markdown} />;
    }
    return <div></div>;
};
