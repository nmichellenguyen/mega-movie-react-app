import React, { Component } from 'react';
import './index.css';
import Navbar from'./Navbar'
import Frame from './Frame'


class App extends Component {

constructor (props) {
  super (props); 
  this.state = {
movies: [],
isLoaded: false,

  }
}
  componentDidMount() {
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a202c2d92495c2db4bf3d9d16d645dc8')
.then (result => result.json())
.then (result => {
this.setState({
isLoaded: true,
movies: result.results,
})

});

  }

  render() {

    const { isLoaded, movies } = this.state;

if (!isLoaded) {
  return <div> Movies displaying...</div>
} else {

  return  (
    <div className="App">
    
    <Navbar/>
    <Frame/>
    {movies.map(movie => {
        return(
         <>
          <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}/>
  <div className="card-body">
    <h5 className="card-title" key={movie.id}>Movie {movie.title}</h5>
    <p className="card-text">Plot: {movie.overview}</p>
    <p className="card-text">Release Date {movie.release_date}</p>
    <p className="card-text">Rating {movie.vote_average}</p>
    <a href="#" class="btn btn-primary">Trailer</a>
  </div>
          </div>
        
        </>
       
        )})}

      
    </div>
  
    );

}
  
  }
}

export default App;
