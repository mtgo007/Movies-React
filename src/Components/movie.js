import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="col-md-4">
        <img src={this.props.filme.Poster} alt={this.props.filme.Title} title={this.props.filme.Title}/>
        <strong><p>{this.props.filme.Title}</p></strong>
        <a target="blank" href={'http://www.imdb.com/title/'+this.props.filme.imdbID+'/'} className="btn btn-success" id="link">Pagina do Filme</a>
      </div>
    );
  }
}

export default Movie;
