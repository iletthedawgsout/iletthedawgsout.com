import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet } from '../models';
import { RootContainer } from '../navigation';

const styles: StyleSheet = {
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export const Admin = (): JSX.Element => (
    <RootContainer style={styles.container}>
        <h1> Admin</h1>
        <Link to={'/'}>{'Back to home'}</Link>
    </RootContainer>
);
