const API_KEY ="f2a02f9fa611178724fe20282714af88";

 const requests = {
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
 };

 export default requests;

//  fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=f2a02f9fa611178724fe20282714af88&with_networks=213`


