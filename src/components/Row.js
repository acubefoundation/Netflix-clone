import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, Button} from 'react-bootstrap';

const base_url = "http://image.tmdb.org/t/p/original/";
function Mrow({ tittle, fetchUrl, isLargeRow }) {
  const [MyMovies, setMyMovies] = useState([]);
  const [trailerVid, setTrailerVid] = useState("");

  useEffect(() => {
    async function requestApi() {
      const request = await axios.get(fetchUrl);
      //  console.log(request.data.results)
      const movies = request.data.results;
      setMyMovies(movies);
      return request;
    }
    requestApi();
  }, [fetchUrl]);
  console.log(MyMovies);
  const trailerHandler = (movies) => {
    if (trailerVid) {
      setTrailerVid("");
    } else {
      movieTrailer(
        movies?.original_name || movies?.original_title || movies?.title || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerVid(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1 className="header">{tittle}</h1>
      <div className="row__vidRow">
        {MyMovies?.map((movies, i) => {
          let movieThumb = movies.poster_path;
          let videoTittle = movies.title;
          let movieWrapper = (
            <img
              onClick={() => {
                trailerHandler(movies);
              }}
              className={`row__eachPoster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movieThumb : movies.backdrop_path
              }`}
              alt={videoTittle}
            />
          );
          return movieWrapper;
        })}
      </div>
      <div>{trailerVid && <Youtube videoId={trailerVid} opts={opts} />}</div>
    </div>
  );
}

export default Mrow;
