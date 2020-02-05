import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Nav from './nav.jsx';
import Quotes from '../pages/quotes.jsx';
import Gallery from '../pages/gallery.jsx';

class App extends React.Component {
  render() {

    return (
      <HashRouter>
	<Nav />
	<Route exact path="/" component={Gallery}/>
	<Route path="/quotes" component={Quotes}/>
      </HashRouter>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#react-root'));
