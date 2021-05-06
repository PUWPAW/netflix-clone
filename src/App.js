import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

function App() {
  const user = null;

  return (
    <Router>
      {!user ? (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <div>Profile</div>
          </Route>
          <Route paht="*">
            <div>Something went wrong! 404</div>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
