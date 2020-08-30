import React from 'react';
import { MenuWrapper } from './Menu';

const settings = props => {

    const linkList = [
        {route: "/categories", name: "Choose categories"},
        {route: "/timer", name: "Timer"},
    ]

    return (
        <MenuWrapper links={linkList} />
    );
}

export default settings;