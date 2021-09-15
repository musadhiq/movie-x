import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

function MovieList() {
  return (
    <div className="root">
      <div className="col">
        <h1 className="heading">Trending</h1>
        <div className="flexBox">
          <Movie
            catogary={`/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
          />
        </div>
      </div>
      <div className="col">
        <h1 className="heading">Top Rated</h1>
        <div className="flexBox">
          <Movie
            catogary={`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
          />
        </div>
      </div>
      <div className="col">
        <h1 className="heading">Popular</h1>
        <div className="flexBox">
          <Movie
            catogary={`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
