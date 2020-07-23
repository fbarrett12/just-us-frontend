import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import userActions from './redux/actions'
//import MainContainer from './containers/MainContainer'
import Routes from './Routes'
import NavigationBar from './components/NavigationBar'
//import Sidebar from './components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.token){
      dispatch(userActions.persistUser())
    }
  }, [dispatch])


  return (
    <Router >
      <div className="app">
        <NavigationBar />
          <Routes />
      </div>
    </Router>
  )
  
}

export default App