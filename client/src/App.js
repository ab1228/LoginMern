import React from 'react';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={AppNavbar} />



        </div>
      </Router>
    </Provider >
  );
}

export default App;
