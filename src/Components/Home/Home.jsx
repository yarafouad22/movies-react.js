import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranding } from '../../Redux/Movieslice';
import { Link } from 'react-router-dom'; 

function Home() {
  const { trandingMovies, loading, error } = useSelector((state) => state.movie);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranding('movie'));
  }, [dispatch]);

  return (
    <>
      <div className="row justify-content-center text-center">
        {loading ? (
          <i className="fas fa-spinner fa-spin fa-4x load"></i>
        ) : error ? (
          <p className="text-danger">Failed to load movies. Please try again.</p>
        ) : trandingMovies && trandingMovies.length > 0 ? (
          trandingMovies.map((movie) => (
            <div className="col-md-3" key={movie.id}>
              <div className="movie">
                <img
                  className="w-100 mt-3"
                  src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                  alt={movie.title}
                />
                <h6 className="movie-title">{movie.title}</h6>
                <p className="movie-overview">{movie.overview}</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-danger ">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
     
    </>
  );
}

export default Home;

