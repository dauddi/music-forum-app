import React, {useState, useEffect} from 'react'
import styles from './app.module.scss'
import {Navbar, SearchBar, PostsContainer} from './Components'

import {useSelector, useDispatch} from 'react-redux'

const App = () => {
  const auth = useSelector(state => state.auth.isAuthenticated);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (auth !== isAuthenticated) {
      setIsAuthenticated(auth)
    }
  }, [auth])

  return (
    <div className={styles.container}>
      <Navbar auth={isAuthenticated}  />
      <PostsContainer auth={isAuthenticated} />
    </div>
  )
}

export default App
