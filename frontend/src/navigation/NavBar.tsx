import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = (): JSX.Element => (
    <nav style={{ flex: 1 }}>
        <ul>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/blm">BLM</Link>
            </li>
            <li>
                <Link to="/about">About me</Link>
            </li>
        </ul>
    </nav>
);
