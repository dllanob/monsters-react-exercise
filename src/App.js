import React, { Component } from 'react';

import { CardListComponent } from "./components/card-list/card-list.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => result.json())
    .then(data => this.setState({ monsters: data }));  
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBoxComponent 
          placeholder='Search monster'
          handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardListComponent monsters={ filteredMonsters }/>
      </div>
    );
  }
}

export default App;