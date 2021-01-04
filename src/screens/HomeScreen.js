import React from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {
  return (
    <>
      Home
      <LinkContainer to='/login'>
        <div>Login</div>
      </LinkContainer>
    </>
  )
}

export default HomeScreen
