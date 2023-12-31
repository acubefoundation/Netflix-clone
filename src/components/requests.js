const API_KEY =  "0122c9d640e5ed500592b0bf6edae294";
const requests = {
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	TopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}




export default requests;
