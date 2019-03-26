import React, { Component } from "react";
import "./index.css";
import NavBar from "./NavBar";
import Frame from "./Frame";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";
import { Col, Row } from "reactstrap";
// import PaginationComponent from "react-reactstrap-pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
      isOpen: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=a202c2d92495c2db4bf3d9d16d645dc8"
    )
      .then(result => result.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          movies: result.results
        });
      });
  }
  fetchTrailer(id) {
    console.log(id);
    const API_KEY = "a202c2d92495c2db4bf3d9d16d645dc8";
    const videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    fetch(videoAPI)
      .then(re => re.json())
      .then(data => {
        this.setState(
          {
            trailerID: data.results.map(result => {
              return result.key;
            })
          },
          () => console.log(this.state.trailerID)
        );
      });
  }
  // Step 0: Call this from "showModal"
  // Step 1: Call the get videos API with the id, to get key (from results)
  // Step 2: setState on the main application to use the youtube key

  showModal(id) {
    this.fetchTrailer(id);
    this.setState({
      isOpen: true
    });
  }
  hideModal() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    const { isLoaded, movies, trailerID } = this.state;

    if (!isLoaded) {
      return <div> Movies displaying...</div>;
    } else {
      return (
        <div className="App">
          <ReactModal
            isOpen={this.state.isOpen}
            contentLabel="Inline Styles Modal Example"
            style={{
              overlay: {
                backgroundColor: "black"
              },
              content: {
                color: "lightsteelblue"
              }
            }}
            closeTimeoutMS={1000}
            contentLabel="modal"
          >
            <div>
              <Row
                className="d-flex justify-content-center mb-2"
                style={{ backgroundColor: "#333", borderColor: "#333" }}
              >
                <p>The movie is comming!</p>
              </Row>
              <Row className="d-flex justify-content-center mb-3">
                <Col style={{ backgroundColor: "#333", borderColor: "#333" }} />
                <Col>
                  <div class="modal-content">
                    {trailerID ? (
                      <YouTube
                        video={trailerID[1] ? trailerID[1] : trailerID[0]}
                        width={640}
                        height={480}
                        autoplay
                      />
                    ) : (
                      "Not Loaded Yet"
                    )}
                  </div>
                </Col>
                <Col style={{ backgroundColor: "#333", borderColor: "#333" }} />
              </Row>
              <Row className="d-flex justify-content-center">
                <div className="modal-footer row-2c">
                  <button
                    color="success"
                    onClick={() => this.hideModal()}
                    type="button"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </Row>
            </div>
          </ReactModal>

          <NavBar />
          <Frame />
          {movies.map(movie => {
            return (
              <Col className="d-flex justify-content-center container-fluid row">
                {/* <PaginationComponent
                  totalItems={1000}
                  pageSize={1}
                  onSelect={this.handleSelectPage}
                  maxPaginationNumbers={9}
                /> */}
                <div className="card m-3 col-md-3" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                  />
                  <div className="card-body">
                    <h5 className="card-title" key={movie.id}>
                      Movie {movie.title}
                    </h5>
                    <p className="card-text">Plot: {movie.overview}</p>
                    <p className="card-text">
                      Release Date {movie.release_date}
                    </p>
                    <p className="card-text">Rating {movie.vote_average}</p>
                    <button
                      onClick={() => this.showModal(movie.id)}
                      type="button"
                      className="btn"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Trailer
                    </button>
                  </div>
                </div>
              </Col>
            );
          })}
        </div>
      );
    }
  }
}

export default App;
