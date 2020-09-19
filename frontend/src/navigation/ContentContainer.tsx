import React, { PropsWithChildren } from 'react';
import { StyleSheet } from '../models';

const styles: StyleSheet = {
    contentContainer: {
        flex: 9,
        display: 'flex',
    },
};

export const ContentContainer = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <div style={styles.contentContainer}>{children}</div>
);
