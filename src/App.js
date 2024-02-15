import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact to="/login" component={LoginForm} />
    <Route exact to="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
