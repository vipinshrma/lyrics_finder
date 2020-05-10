import React from 'react';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/nav';
import Index from './components/layouts/Index';
import {Provider} from './context';
import Lyrics from './components/tracks/lyrics'
function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
      <Navbar/>
      <div className="container">
          <Switch>
          <Route exact path="/" component={Index} /> 
          <Route exact path="/lyrics/track/:id" component={Lyrics}/>
          </Switch>
      </div>
    </React.Fragment>
      
    </Router> 
    </Provider>
  
  );
}

export default App;
