import React from 'react';
import styles from './styles/navbar.module.scss'
import { Button } from '@mui/material';

import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1>Music Forum App</h1>

            <SearchBar></SearchBar>

            <Button variant="contained" disableElevation>Login to Post</Button>
        </nav>
    )
}

export default Navbar
