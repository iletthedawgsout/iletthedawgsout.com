import React from 'react';
import { StyleSheet } from '../models';

const styles: StyleSheet = {
    header: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_text: {
        color: "#363C74"
    }
};

export const Header = (): JSX.Element => (
    <div style={styles.header}>
        <h1 style={styles.header_text}>I Let the Dawgs Out</h1>
    </div>
);
