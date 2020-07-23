import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from '../containers/MainContainer'

const Home = () => {
    const currentUser = useSelector(state => state.user)
        
    console.log(currentUser)
    
    // const text = currentUser.token ? (
    //     <h1> {currentUser.userInfo.name} is currently logged in </h1>
    // ) :
    // (
    //     <MainContainer />
    // )

    return (
        <div>
            <MainContainer />
        </div>
    )
}

export default Home