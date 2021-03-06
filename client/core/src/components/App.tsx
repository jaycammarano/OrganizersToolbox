import '../assets/css/styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import UserProfile from './UserProfilePage/UserProfile';
import OrgProfile from './OrgProfilePage/OrgProfile';
import LandingPage from './LandingPage/LandingPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={HomePage} />
        <Route exact path="/user/0" component={UserProfile} />
        <Route exact path="/org/0" component={OrgProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
