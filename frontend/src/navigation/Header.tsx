import React from 'react';
import { StyleSheet } from '../models';

const styles: StyleSheet = {
    header: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
};

export const Header = (): JSX.Element => (
    <div style={styles.header}>
        <h1>I let the dawgs out</h1>
    </div>
);
