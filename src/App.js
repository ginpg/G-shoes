import React from 'react';
import Header from './components/elements/Header';
import Address from './components/checkout/Address';

import Home from './components/marketplace/Home';
import Women from './components/marketplace/Women';
import Men from './components/marketplace/Men';
import Kids from './components/marketplace/Kids';
import Detail from './components/marketplace/Detail';

import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {

  var autenticado = true
  return (
    <Router>
      <Provider store={store}>
          
          {autenticado ?
                <>
                  <Header />
                  <div className="container mt-5">
                  <Switch>
                  <Route exact path="/checkout/address" component={Address} />
                  <Route exact path="/detail" component={Detail} />
                  <Route exact path="/women" component={Women} />
                  <Route exact path="/men" component={Men} />
                  <Route exact path="/kids" component={Kids} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/" component={Home} />
                  </Switch>
                  </div>
                </>
            :
              <>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
              </>
            
          }

      </Provider>
    </Router>
  );
}

export default App;
