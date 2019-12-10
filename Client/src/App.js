import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Browse from './components/browse/Browse';
import AddTip from './components/addTip/AddTip';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <CssBaseline />
        <header className='App-header main-bg'>
          <Router>
            <React.Fragment>
              <Header />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/browse' exact component={Browse} />
                <Route path='/addtip' exact component={AddTip} />
              </Switch>
            </React.Fragment>
          </Router>
        </header>
      </div>
    </Provider>
  );
};

export default App;
