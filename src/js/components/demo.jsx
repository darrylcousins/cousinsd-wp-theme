import React from 'react';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }
              className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray">
	Button
      </button>
    );
  }
}

export default LikeButton;
