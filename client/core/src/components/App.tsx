import '../assets/css/styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import UserProfile from './UserProfile/UserProfile';
import OrgProfile from './OrgProfile/OrgProfile';
import UserSignUp from './UserSignUp/UserSignUp';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={UserSignUp} />
        <Route exact path="/user/0" component={UserProfile} />
        <Route exact path="/org/0" component={OrgProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
