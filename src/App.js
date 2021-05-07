import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { auth } from "./lib/firebase";

import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import { loginAction, logoutAction } from "./redux/actions/actionCreators";

function App() {
  const login = useSelector(({ auth }) => auth.login);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginAction({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logoutAction());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      {!login ? (
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
