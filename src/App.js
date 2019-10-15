import React from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';
import './App.css';


export default class App extends React.Component {
  
  state = {
    monsters : [],
    searchField: ''
  }

  componentDidMount () {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => this.setState(() => { 
        return ({ monsters });
    }));
  }

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    this.setState(()=>({ searchField: searchTerm }))
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters, Inc.</h1>
        <SearchBox
          handleSearch={this.handleSearch}
          placeholder={'search monsters'} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

