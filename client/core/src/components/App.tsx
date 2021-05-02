import '../assets/css/styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
