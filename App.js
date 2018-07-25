import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number1: [],
      number2: [],
      operator: null,
      result: 0,
      sumClicked: false
    }
  }

  holdNumber = (e) => {
    const num = parseInt(e.target.innerHTML)
    
    if (this.state.operator === null) {
      this.setState({number1: this.state.number1 + num})
    } else {
      this.setState({number2: this.state.number2 + num})
    }

  }

  holdOperator = (e) => {
    const oprt = e.target.innerHTML
    this.setState({operator: oprt})
  }

  sumNumber = () => {
    const num1 = parseInt(this.state.number1)
    const num2 = parseInt(this.state.number2)

    switch(this.state.operator){
      case "+" :
        this.setState({
          result: num1 + num2,
          number1: [],
          number2: [],
          operator: null,
          sumClicked: !this.state.sumClicked
        });
        break;
      case "-" :
        this.setState({
          result: num1 - num2,
          number1: [],
          number2: [],
          operator: null,
          sumClicked: !this.state.sumClicked
        });
        break;
      case "X" :
        this.setState({
          result: num1 * num2,
          number1: [],
          number2: [],
          operator: null,
          sumClicked: !this.state.sumClicked
        });
        break;
      case "/" :
        this.setState({
          result: num1 / num2,
          number1: [],
          number2: [],
          operator: null,
          sumClicked: !this.state.sumClicked
        });
        break;
      case "%" :
        this.setState({
          result: num1 % num2,
          number1: [],
          number2: [],
          operator: null,
          sumClicked: !this.state.sumClicked
        });
        break;
    }
  }

  resetState = () => {
    this.setState({
      number1: [],
      number2: [],
      operator: null,
      result: 0
    })
  }

  render() {
    const number1 = this.state.number1
    const number2 = this.state.number2
    const operator = this.state.operator
    const result = this.state.result

    let viewComp;
    if(result === 0) {
      viewComp = <div className="view">{number1} {operator} {number2}</div>
    } else {
      viewComp = <div className="view">{result}</div>
    }

    return (
      <div className="App">
      {viewComp}
        {/* <div className="view">{result}</div>
        <div className="view">{number1} {operator} {number2}</div> */}

        <div className="button operator">(</div>
        <div className="button operator">)</div>
        <div className="button operator" onClick={this.holdOperator}>%</div>
        <div className="button operator" onClick={this.resetState}>AC</div>

        <div className="button" onClick={this.holdNumber}>7</div>
        <div className="button" onClick={this.holdNumber}>8</div>
        <div className="button" onClick={this.holdNumber}>9</div>
        <div className="button operator" onClick={this.holdOperator}>/</div>

        <div className="button" onClick={this.holdNumber}>4</div>
        <div className="button" onClick={this.holdNumber}>5</div>
        <div className="button" onClick={this.holdNumber}>6</div>
        <div className="button operator" onClick={this.holdOperator}>X</div>

        <div className="button" onClick={this.holdNumber}>1</div>
        <div className="button" onClick={this.holdNumber}>2</div>
        <div className="button" onClick={this.holdNumber}>3</div>
        <div className="button operator" onClick={this.holdOperator}>-</div>

        <div className="button" onClick={this.holdNumber}>0</div>
        <div className="button">.</div>
        <div className="button equal" onClick={this.sumNumber}>=</div>
        <div className="button operator" onClick={this.holdOperator}>+</div>
      </div>
    );
  }
}

export default App;
