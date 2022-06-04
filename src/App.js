import React, { Component } from 'react';
import Todo from './components/todoitems/todoitems'
import Add from './components/additems/add'
class App extends Component {
  state = {
    items: [
      { id: 1, name: 'lapo', age: 22 },
      { id: 2, name: 'ji', age: 22 },
      { id: 3, name: 'lapllo', age: 24 }
    ]
  }

  deletitem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })
  }

  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items })
  }

  render() {
    return (
      <div className="App Container">
        <h1 className="center">Todo list</h1>
        < Todo items={this.state.items} deletitem={this.deletitem} />
        <Add additem={this.additem} />
      </div>
    );
  }
}

export default App;
