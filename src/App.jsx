import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/home" component={Home} />
    </Switch>
  )
}

export default App;