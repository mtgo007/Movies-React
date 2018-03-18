import React, { Component } from 'react';
import Movie from './movie'

class Movies extends Component {

  render() {
    let Filmes;
    if(this.props.filmes){
        // console.log(this.props.users);
        Filmes = this.props.filmes.map(filme =>{
            return (<Movie key={filme.imdbID} filme={filme}/>)
        });
      // console.log(usuario);
    }

    return (
      <div className="row">
        {Filmes}
      </div>
    );
  }
}

export default Movies;
