import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [
      { id: 1, name: 'Simon Bailey'},
      { id: 2, name: 'Thomas Burleson'},
      { id: 3, name: 'Will Button'},
      { id: 4, name: 'Ben Clinkinbeard'},
    ]};
    this.update = this.update.bind(this);

  }
  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person}></PersonRow>
    })
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  update(e) {
    this.setState({ val: e.target.value });
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
};

export default App;
