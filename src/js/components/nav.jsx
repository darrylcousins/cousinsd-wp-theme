import React from 'react';
import {
  NavLink
} from "react-router-dom";

class Nav extends React.Component {
  render() {
    const scope = {
      navLink: {
	fontFamily: '"EB Garamond", serif',
	fontSize: "1.3em",
      }
    }

    const linkClass="link dim silver f6 f5-ns dib mr3";
    return (
      <nav className="pa3 pa4-ns mb4 bb">
	<NavLink
	  exact
	  style={scope.navLink}
	  className={linkClass}
	  title="Home" to="/">
	  Gallery
	</NavLink>
	<NavLink
	  style={scope.navLink}
	  className={linkClass}
	  title="Thoughts" to="/quotes">
	  Thoughts
	</NavLink>
      </nav>
    );
  }
}

export default Nav
