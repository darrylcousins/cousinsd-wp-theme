import React from "react";
import Thumbnail from '../components/thumbnail.jsx';

class Home extends React.Component {
  render() {
    const scope = {
      headline: {
	fontFamily: '"EB Garamond", serif',
	fontSize: "3em"
      }
    }
    return (
      <div className="center ph3-ns">
	<h2 style={scope.headline} className="tc near-white">Home</h2>

	<p className="lh-title near-white">Cras facilisis urna ornare ex volutpat, et
	convallis erat elementum. Ut aliquam, ipsum vitae
	gravida suscipit, metus dui bibendum est, eget rhoncus nibh
	metus nec massa. Maecenas hendrerit laoreet augue
	nec molestie. Cum sociis natoque penatibus et magnis
	dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    );
  }
}

export default Home;
