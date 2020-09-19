import React, { PropsWithChildren } from 'react';
import { StyleSheet } from '../models';

const styles: StyleSheet = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
};

export const RootContainer = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
    <div style={styles.container}>{children}</div>
);
