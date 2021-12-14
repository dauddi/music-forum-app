import React from 'react'
import styles from './styles/searchbar.module.scss'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className={styles.search} >
            <input className={styles.input} type="text" placeholder="Search by keywords" />
            <SearchIcon color="primary" className={styles.searchIcon} />
        </div>
    )
}

export default SearchBar
