import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}> 
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(0).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return (
      <Square
	value={this.props.squares[i]}
	onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
	<div className="board-row">
	  {this.renderSquare(0)}
	  {this.renderSquare(1)}
	  {this.renderSquare(2)}
	</div>
	<div className="board-row">
	  {this.renderSquare(3)}
	  {this.renderSquare(4)}
	  {this.renderSquare(5)}
	</div>
	<div className="board-row">
	  {this.renderSquare(6)}
	  {this.renderSquare(7)}
	  {this.renderSquare(8)}
	</div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
	squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  handleClick(i) {
    const { stepNumber, xIsNext } = this.state;
    const history = this.state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    this.setState({ 
      history: history.concat([{
	squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    });
  }

  render() {
    const { stepNumber, xIsNext, history } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
	'Go to move: #' + move :
	'Go to start';
      return (
	<li key={move} className="">
	  <button
	    className="f6 link dim br3 ba bw1 ph3 pv2 mb2 dib dark-gray"
	    onClick={() => this.jumpTo(move)}>{desc}</button>
	</li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
	<div className="game-board">
	  <Board
	    squares={current.squares}
	    onClick={(i) => this.handleClick(i)}
	  />
	</div>
	<div className="game-info">
	  <div>{status}</div>
	  <ol>{moves}</ol>
	</div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default Game;
