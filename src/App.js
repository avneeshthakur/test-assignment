import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Register from './components/signUp';
import Login from './components/login';
import Home from './components/home';
import NotFound from './components/NotFound';

export const isUserAuthenticated = () => {
  let user = localStorage.getItem('auth_token');
  if (user) {
      return true;
  } else {
    return false;
  }
};

 const PublicRoute = ({ component: Component, ...rest }) => {
      return (<Route {...rest} render={(routeProps) => (
        isUserAuthenticated()
          ? <Redirect to='/' /> : <Component {...routeProps} />
      )} />
      );
    };


 const PrivateRoute = ({ component: Component, ...rest }) => {
      return (<Route {...rest} render={(routeProps) => (
        isUserAuthenticated()
          ? <Component {...routeProps} /> : <Redirect to='/login' />
      )} />
      );
    };


const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <PublicRoute exact path="/sign-up" component={Register} />
        <PrivateRoute exact path="/" component={Home} />
        <PublicRoute exact path="/login" component={Login}/>
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
