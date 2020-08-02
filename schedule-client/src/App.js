import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BHome from './components/business/homepg/BHome';
import Contact from './components/business/contact/Contact';
import CHome from './components/customer/homepg/CHome';
import NoMatch from './components/shared/NoMatch';
import Help from './components/shared/Help';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';
import Navbar from './components/shared/Navbar';
import Bdash from './components/business/businessDash/BDash';
import CustomerRegister from './components/auth/CustomerRegister';
import ThankYouPg from './components/shared/ThankYouPg';
import CDash from './components/customer/customerDash/CDash';
import CalPg from './components/customer/customerAppt/CalPg';

const App = () => (
  <>  
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path="/" component={BHome} /> 
        <Route exact path="/:business_id/home" component={CHome} /> 
        <Route exact path="/:business_id/contact" component={Contact} /> 
        <Route exact path="/:business_id/admin-dash" component={Bdash} />
        <Route exact path="/:business_id/dash" component={CDash} />
        <Route exact path="/:business_id/cal" component={CalPg} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/:business_id/register" component={CustomerRegister} />
        <Route exact path='/thank-you' component={ThankYouPg} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;