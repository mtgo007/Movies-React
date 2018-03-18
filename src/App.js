import React, { Component } from 'react';
import Movies from "./Components/movies";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [],
      input:''
    }
  }
  search(){
    let busca = this.state.input;
    busca = busca.replace(' ', '+');
    console.log(busca.toLowerCase());
    fetch('http://www.omdbapi.com/?s='+busca+'&apikey=4e8f5c83')
    .then(resultado => {
      return resultado.json();
    }).then(filmes => {
      this.setState({movies:filmes.Search});
    }).catch(err => {console.log(err)});
  }
  handleChange(event){
    this.setState({input:event.target.value});
    console.log(this.state.input);
  }
  componentWillMount(){

  }
  render() {
    return (
      <div className="container">
        <h1>Filmes</h1>
        <div className="input">
          <input value={this.state.input} onChange={this.handleChange.bind(this)}/>
          <input className="btn btn-primary" type="submit" value="Procurar" onClick={this.search.bind(this)}/>
        </div>
        <Movies filmes={this.state.movies}/>
      </div>
    );
  }
}

export default App;
