import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import WebFont from 'webfontloader';
import Nav from './nav.jsx';
import Quotes from '../pages/quotes.jsx';
import Gallery from '../pages/gallery.jsx';

WebFont.load({
  google: {
    families: ['Covered By Your Grace', 'Montserrat:300,400'],
  },
});

const App = () => {
  const location = useLocation();

  return (
    <div className="center">
      <Nav />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/quotes" component={Quotes} />
          <Route exact path="/" component={Gallery} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#react-root'));
