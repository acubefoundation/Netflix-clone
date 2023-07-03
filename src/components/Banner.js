import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, Button} from 'react-bootstrap';

const base_url = 'http://image.tmdb.org/t/p/original/'
function Banner() {
    const [movie, setMovie] = useState([])
   useEffect(() =>{
     async function bannerFetch() {
        const request = await axios.get(requests.NetflixOriginals)
        const bannerMovie = request?.data.results
        console.log(bannerMovie)
        setMovie(bannerMovie[Math.floor(Math.random() * request.data.results.length)])
    return request
    }
    bannerFetch()
   }, [])
   console.log(movie)
   function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <div className="banner" style={{
        backgroundImage: "url("+`${base_url}${movie.backdrop_path}`+ ")",
        backgroundSize: "cover",
        backgroundPosition: "center center",
       
        
    }

    }>
        <div className="banner__tbdesc">
        <h1 className="banner__tbdesc--tittle">{movie?.name}</h1>
        <div>
            <Button className="banner__tbdesc--bannButt">play</Button>
            <Button className="banner__tbdesc--bannButt">My List</Button>
        </div>
        <p className='banner__tbdesc--desc'>
        {`${truncate(movie?.overview, 150)}...`}
        </p>
        </div>
        <div className='banner__tbdesc--fade'>
        </div>
    </div>
  )
}

export default Banner