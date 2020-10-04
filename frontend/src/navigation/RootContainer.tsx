import React, { CSSProperties, PropsWithChildren } from 'react';
import { StyleSheet } from '../models';
import { combineStyles } from '../utils';

const styles: StyleSheet = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
};

type Props = Readonly<{
    style?: CSSProperties;
}>;

export const RootContainer = ({ children, style }: PropsWithChildren<Props>): JSX.Element => {
    const combinedStyle = combineStyles(styles.container, style);
    return <div style={combinedStyle}>{children}</div>;
};
