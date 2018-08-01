import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: [],
      number2: [],
      operator1: null,
      result: 0
    }
  }

  holdNumber = (args) => {
    const number1 = this.state.number1
    const number2 = this.state.number2
    const operator1 = this.state.operator1

    if (operator1 === null) {
      this.setState({number1: this.state.number1 + args})
    } else  {
      this.setState({number2: this.state.number2 + args})
    }
  }

  holdOperator = (args) => {
    const operator1 = this.state.operator1
    this.setState({operator1: args})
  }

  sumNumber = () => {
    const operator1 = this.state.operator1

    switch(operator1) {
      case "+":
        this.setState({
          result: parseInt(this.state.number1) + parseInt(this.state.number2),
          number1: [],
          number2: [],
          operator1: null,
        })
        break;

      case "-":
        this.setState({
          result: parseInt(this.state.number1) - parseInt(this.state.number2),
          number1: [],
          number2: [],
          operator1: null,
        })
        break;
      case "x":
        this.setState({
          result: parseInt(this.state.number1) * parseInt(this.state.number2),
          number1: [],
          number2: [],
          operator1: null,
        })
        break;
      case "/":
        this.setState({
          result: parseInt(this.state.number1) / parseInt(this.state.number2),
          number1: [],
          number2: [],
          operator1: null,
        })
        break;

      default:
        return operator1
    }
  }

  resetState = () => {
    this.setState({
      number1: [],
      number2: [],
      result: 0
    })
  }

  render() {
    const number1 = this.state.number1
    const number2 = this.state.number2
    const operator1 = this.state.operator1
    const result = this.state.result

    return (
      <div className="App">
        <div className="view">{result}</div>
        <div className="view"> {number1} {operator1} {number2} </div>
        
        <div className="button" onClick={() => this.holdNumber(7)}>7</div>
        <div className="button" onClick={() => this.holdNumber(8)}>8</div>
        <div className="button" onClick={() => this.holdNumber(9)}>9</div>
        <div className="button operator" onClick={this.resetState}>AC</div>
        
        <div className="button" onClick={() => this.holdNumber(4)}>4</div>
        <div className="button" onClick={() => this.holdNumber(5)}>5</div>
        <div className="button" onClick={() => this.holdNumber(6)}>6</div>
        <div className="button operator" onClick={() => this.holdOperator("/")}>/</div>
      
        <div className="button" onClick={() => this.holdNumber(1)}>1</div>
        <div className="button" onClick={() => this.holdNumber(2)}>2</div>
        <div className="button" onClick={() => this.holdNumber(3)}>3</div>
        <div className="button operator" onClick={() => this.holdOperator("x")}>x</div>

        <div className="button" onClick={() => this.holdNumber(7)}>0</div>
        <div className="button equal" onClick={this.sumNumber}>=</div>
        <div className="button operator" onClick={() => this.holdOperator("-")}>-</div>
        <div className="button operator" onClick={() => this.holdOperator("+")}>+</div>
      </div>
    );
  }
}

export default App;
