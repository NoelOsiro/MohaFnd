// components/HeaderBar.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import { MenuButton, SearchField } from '@aws-amplify/ui-react';
import { HomenavigationLinks, OfficenavigationLinks } from '../Sidebar/Links';
import { Menu, MenuItem, View, Divider } from '@aws-amplify/ui-react';
import { FcAbout, FcSpeaker } from 'react-icons/fc';
import { MenuItemsExample } from './MenuItem';
import { IconBaseProps } from 'react-icons/lib';



const HeaderBar: React.FC = () => {
    const [value, setValue] = React.useState('');

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    // It is your responsibility to set up onClear
    const onClear = () => {
        setValue('');
    };
    const location = useLocation();

    // Define a function to get the title based on the current location
    const getPageTitle = () => {
        const matchedLink = HomenavigationLinks.find((link) => link.path === location.pathname) || OfficenavigationLinks.find((link) => link.path === location.pathname);
        return matchedLink ? matchedLink.label : 'Page Title';
    };
    return (
        <header className="header">
            <div className="logo">{getPageTitle()}</div>
            <ul className="navbar-nav ml-auto">
                <SearchField
                    label="search"
                    onChange={onChange}
                    onClear={onClear}
                    value={value}
                    placeholder='Search..'
                />
                <MenuItemsExample icon={FcSpeaker} children={
                    <>
                        <MenuItem onClick={() => alert('Download')}>Download</MenuItem>
                        <MenuItem onClick={() => alert('Create a Copy')}>Create a Copy</MenuItem>
                        <Divider />
                        <MenuItem isDisabled onClick={() => alert('Delete')}>Delete</MenuItem>
                    </>
                } />


                <div className="topbar-divider d-none d-sm-block"></div>
                <MenuItemsExample icon={FcAbout} children={
                    <>
                        <MenuItem onClick={() => alert('Download')}>Download</MenuItem>
                        <MenuItem onClick={() => alert('Create a Copy')}>Create a Copy</MenuItem>
                        <Divider />
                        <MenuItem isDisabled onClick={() => alert('Delete')}>Delete</MenuItem>
                    </>
                }/>
                <div className='d-block'>
                    <FcAbout/>
                    <text>Noel Osiro</text>
                </div>

            </ul>
        </header>
    );
};

export default HeaderBar;
