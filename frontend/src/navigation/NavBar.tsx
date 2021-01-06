import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IS_DEV } from '../utils';
import { StyleSheet } from '../models';

const styles: StyleSheet = {
    nav_box: {
        margin: 1,
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        borderStyle: 'dotted'
    }
};

type Props = Readonly<{
    label: string;
    to: string;
}>;

const CustomLink = ({ label, to }: Props) => {
    const { pathname } = useLocation();
    const match = pathname === to;

    return (
        <div className={match ? 'active' : ''}>
            {match && '> '}
            <Link to={to}>{label}</Link>
        </div>
    );
};

export const NavBar = (): JSX.Element => {
    return (
        <nav style={styles.nav_box}>
            <i className="fas fa-bars fa-2x"></i>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li>
                    <CustomLink to="/about" label="About" />
                </li>
                <li>
                    <CustomLink to="/blm" label="Acknowledgments" />
                </li>
                <li>
                    <CustomLink to="/blm" label="BLM" />
                </li>
                <li>
                    <CustomLink to="/" label="Blog" />
                </li>
                {IS_DEV && (
                    <li>
                        <CustomLink to="/admin" label="Admin" />
                    </li>
                )}
            </ul>
        </nav>
    );
};
