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
        <nav style={{ flex: 1, paddingLeft: 10, borderStyle: 'dotted' }}>
            <i className="fas fa-bars fa-2x"></i>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
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
