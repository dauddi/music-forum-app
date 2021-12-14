import React from 'react'
import styles from './app.module.scss'
import {Navbar, SearchBar, PostsContainer} from './Components'

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <SearchBar /> */}
      <PostsContainer />
    </div>
  )
}

export default App
