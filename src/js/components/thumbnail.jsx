import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    const src = props.src;
    this.imgid = src.split('/').slice(-1)[0].split('.').slice(0)[0];
  }

  handleImageLoaded() {
    console.log("on load");
    this.setState({ loading: false });
  }

  handleImageErrored() {
    console.log("on error");
    this.setState({ loading: false });
  }

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return <div className="spinner" />;
  }

  renderDiv() {
    if (this.state.loading) {
      return null;
    }
    const img = document.getElementById(this.imgid);
    var scope = {
      bgStyle:  {
	backgroundImage: "url(" + this.props.src + ")",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundColor: "#374d6d",
      },
      layerStyle:  {
	background: "rgba(0, 0, 0, 0.4)",
	minHeight: "550px",
	paddingTop: "30px"
      }
    }
    return (
      <div style={scope.bgStyle}>
	<div style={scope.layerStyle} className="pv2 ph3 near-white">
	  <div className="move">
	    { this.props.children }
	  </div>
	</div>
      </div>
    )
  }

  render() {
    var scope = {
      imgStyle:  {
	position: "absolute",
	top: "-5000px",
	left: "-5000px"
      }
    }
    return (
      <div className="fl w-100 w-50-l">
	<img
	  id={this.imgid}
	  src={this.props.src}
	  style={scope.imgStyle}
	  onLoad={this.handleImageLoaded.bind(this)}
	  onError={this.handleImageErrored.bind(this)}
	/>
	{ this.renderDiv() }
	{ this.renderSpinner() }
      </div>
    )
  }
}

//Thumbnail.propTypes = {
//    src: React.PropTypes.string.isRequired
//};
export default Thumbnail;

