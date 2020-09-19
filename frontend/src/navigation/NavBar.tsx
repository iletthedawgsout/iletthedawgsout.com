import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <nav style={{ flex: 1, borderStyle: 'dotted' }}>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <CustomLink to="/" label="Blog" />
                </li>
                <li>
                    <CustomLink to="/blm" label="BLM" />
                </li>
                <li>
                    <CustomLink to="/about" label="About" />
                </li>
            </ul>
        </nav>
    );
};
