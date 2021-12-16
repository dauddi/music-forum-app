import React from 'react'
import styles from './styles/tabs.module.scss'

const Tabs = ({ auth }) => {
    return (
        <div className={styles.tabs}>

            <ul className={styles.tablinks}>
                <li>Forum Feed</li>
                <li>My Posts</li>
                <li>Saved Posts</li>
            </ul>
        </div>
    )
}

export default Tabs
