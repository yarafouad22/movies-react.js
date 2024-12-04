import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../../Redux/Movieslice';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(id)); 
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <i className="fas fa-spinner fa-spin fa-4x load"></i>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : movieDetails ? (

        <>
        <div className='row'>
          <h2 className='overview-details text-center'>{movieDetails.title}</h2>
          <div className='col-md-8 details-img'><img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
        
          /></div>
          <div className='col-md-4 '>
          <p className='overview-details '>{movieDetails.overview}</p>
          <p className='overview-details'><strong>Release Date:</strong> {movieDetails.release_date}</p>
          <p className='overview-details'><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          </div>
          </div>
        </>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
}

export default Details;
