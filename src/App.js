import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ListScreen from './screens/ListScreen'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        {/* <Route path='/register' component={RegisterScreen} exact /> */}
        <Route path='/list' component={ListScreen} exact />
      </Container>
    </Router>
  )
}

export default App
