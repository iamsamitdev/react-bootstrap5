import {Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default App;