import React, {useState, useEffect} from 'react';
import styles from './styles/navbar.module.scss'
import { Button } from '@mui/material';
import SearchBar from './SearchBar'

import { authenticate, deauthenticate } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux'

const Navbar = ({ auth }) => {
    // const [isAuth, setIsAuth] = useState(auth)
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (auth) {
            //create post to forum logic
            alert('post feature will be available soon')
        } else {
            dispatch(authenticate());
        }
    }

    return (
        <nav className={styles.nav}>
            <h1>Music Forum</h1>

            <SearchBar></SearchBar>

            {!auth && <Button variant="contained" onClick={handleLogin} disableElevation> Login to Post </Button>}
            {auth && <Button variant="contained" color="warning" onClick={ () => dispatch(deauthenticate()) } >Log Out</Button>}
        </nav>
    )
}

export default Navbar
