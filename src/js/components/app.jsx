import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Nav from './nav.jsx';
import Home from '../pages/home.jsx';
import Gallery from '../pages/gallery.jsx';

class App extends React.Component {
  render() {

    return (
      <HashRouter>
	<Nav />
	<Route exact path="/" component={Home}/>
	<Route path="/gallery" component={Gallery}/>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#react-root'));
