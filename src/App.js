import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: '',
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output
      });
    } catch (e) {

    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div classNam="container">
          <textarea
            onChange={this.update}
            defaultValue={this.state.input}></textarea>
        </div>

        <pre>
          {this.state.output}
        </pre>
      </div>
    );
  }
}

export default App;
