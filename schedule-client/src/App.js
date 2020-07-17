import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BHome from './components/business/homepg/BHome';
import Contact from './components/business/homepg/Contact';
import CHome from './components/customer/homepg/CHome';
import NoMatch from './components/shared/NoMatch';
import Help from './components/shared/Help';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>  
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={BHome} /> 
        <Route exact path="/:business_id/home" component={CHome} /> 
        <Route exact path="/:business_id/contact" component={Contact} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/help" component={Help} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;