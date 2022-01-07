import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }
  searchOnChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    let filteredMonsers = this.state.monsters.filter((x) =>
      x.name.toUpperCase().includes(this.state.searchField.toUpperCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder={"Szukaj potworków"}
          onChangeHandler={this.searchOnChange}
        ></Search>
        <CardList monsters={filteredMonsers}></CardList>
      </div>
    );
  }
}

export default App;
