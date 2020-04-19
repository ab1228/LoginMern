import React from 'react';
import AppNavbar from './components/AppNavbar';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import RegisterModal from './components/Auth/Register';
import Login from './components/Auth/Login';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppNavbar} />
          <div>
            <Route exact path="/register" component={RegisterModal} />
            <Route exact path="/login" component={Login} />


          </div>



        </div>
      </Router>
    </Provider >
  );
}

export default App;
