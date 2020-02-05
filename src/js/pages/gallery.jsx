import React from "react";
import Thumbnail from '../components/thumbnail.jsx';

class Gallery extends React.Component {
  render() {
    const scope = {
      headline: {
	fontFamily: '"EB Garamond", serif',
        fontSize: "3em"
      },
      textBlock: {
       display: "flex",
       justifyContent: "center"
      }
    }
    return (
      <div className="center pa1 pa3-ns">
        <div className="cf ph2-ns">
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/taumutu-1.jpg">

	   <a className="near-white no-underline center" target="_blank" href="https://goo.gl/photos/9XbnbTsgK3txB2Tx5">
	     <h2 style={scope.headline} className="tc">House Renovation</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">Originally built as a 4 room cottage in the
	       1920's the house was extended in the 1970's and the roof reframed
	       at that time. The old rimu framed walls and floor from the original build have
	       deteriorated dramatically over time as borer attacked the rimu
	       framing. The project so far has seen walls removed or replaced.
	       Some of the floors have been replaced with new piles and bearers.
	       Some of the ceilings have now also been reframed and
	       insulated. It is still very much a work in progress
	       (never to be completed I sometimes ask myself). Some of the
	       project is documented in this gallery of images.</p>
	     </div>
	    </a>
	    
	  </Thumbnail>
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/oven-1.jpg">

	   <a className="near-white no-underline" target="_blank" href="https://goo.gl/photos/eprUyH4BHXoNZBB98">
	    <h2 style={scope.headline} className="tc">Ovens</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">I've built more than a few brick and clay
	       ovens over the years. This gallery documents a couple of them,
	       including one that I use as a wood-fired kiln to bake smaller clay
	       objects of practical and creative purpose.</p>
	    </div>
	   </a>
	    
	  </Thumbnail>
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/porch-1.jpg">

	   <a className="near-white no-underline" target="_blank" href="https://goo.gl/photos/Yq8TepCxAk8U73FR9">
	    <h2 style={scope.headline} className="tc">A Porch</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">Probably the biggest building project that
	       I completed on my own around 2005. The high deck was rebuilt,
	       framed, and partially enclosed with second-hand windows. Steps
	       were built down to a new lower deck. At the same time the front
	       porch was rebuilt copying the style of the original build.</p>
	     </div>
	   </a>
	    
	  </Thumbnail>
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/canoe-1.jpg">

	   <a className="near-white no-underline" target="_blank" href="https://goo.gl/photos/fHsTe2Btx7n9Namk9">
	    <h2 style={scope.headline} className="tc">Canoe Build</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">Another unfinished project built to plans
	       from a book on building strip canoes. One day the hull will be
	       covered with transparent fibreglass. One day ...</p>
	     </div>
	   </a>
	    
	  </Thumbnail>
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/camper-1.jpg">

	   <a className="near-white no-underline" target="_blank" href="https://goo.gl/photos/naU5SxQsd9zqYNgA8">
	    <h2 style={scope.headline} className="tc">A Camper</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">This timber camper was built on the back on
	       a ute. It did get a number of years of use as a covered ute canopy
	       and camper before I finally sold it with the ute.</p>
	     </div>
	   </a>
	    
	  </Thumbnail>
	  <Thumbnail src="http://darrylcousins.net.nz/media/cousinsd/trailer-1.jpg">

	   <a className="near-white no-underline" target="_blank" href="https://goo.gl/photos/Dd5Zv8rgAtuVKapo7">
	    <h2 style={scope.headline} className="tc">Trailer Build</h2>

	     <div className="item-divider" />

	     <div style={scope.textBlock}>
	      <p className="measure tj lh-copy">This was my first and remains the biggest
	       engineering project that I've undertaken. It was built in 2008 and
	       is still registered and in great condition.</p>
	     </div>
	    </a>
	    
	  </Thumbnail>
	</div>
      </div>
    );
  }
}

export default Gallery;
