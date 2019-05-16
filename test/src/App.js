import React, { Component } from 'react';
import './App.css';
import Top from './components/Top/Top';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      fn: this.props.fn,
    }
  }
  

  handler() {
    if(this.state.fn) {
      this.state.fn()
    };
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <Top list={['item1', 'item2', 'item4']} />
        <div>{this.state.count}</div>
        <button onClick={this.handler.bind(this)}>+</button>
      </div>
    );
  }
}

export default App;
