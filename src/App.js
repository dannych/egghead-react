import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      red   : 128,
      green : 128,
      blue  : 128,
    };
    this.update = this.update.bind(this);
  }
  render() {
    return (
      <div>
        <Slider ref="red" val={this.state.red} update={this.update} />
        <Slider ref="green" val={this.state.green} update={this.update} />
        <Slider ref="blue" val={this.state.blue} update={this.update} />      
      </div>
    );
  }
  update(e) {
    this.setState({ 
      red: ReactDOM.findDOMNode(this.refs.red.refs.slider).value,  
      green: ReactDOM.findDOMNode(this.refs.green.refs.slider).value,  
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.slider).value,  
    });
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="slider" type="range" min="0" max="255" onChange={this.props.update} value={this.props.val} />
        <span>{this.props.val}</span>
      </div>
    );
  }
}

export default App;
