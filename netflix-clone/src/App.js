import './css/App.css';
import Main from './pages/index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>    
  );
}

export default App;
