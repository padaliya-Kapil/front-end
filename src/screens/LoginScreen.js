import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../actions/userActions.js'

const LoginScreen = ({ location, history }) => {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo, loggedIn } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/list'

  useEffect(() => {
    if (loggedIn) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <>
      <h1>Sign In </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email.'
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password.'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>

        <Row className='py-3'>
          <Col>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              New customer?{' '}
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default LoginScreen
