import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTranding } from '../../Redux/Tvslice';

function Tv() {


const {trandingTv, loading, error } = useSelector((state) => state.tv);

let dispatch=useDispatch();


  useEffect(()=>{
    dispatch(getTranding('tv'));

  },[]);
 

return (
    <>

    <div className="row justify-content-center text-center">
        {loading ? (
          <i className="fas fa-spinner fa-spin fa-4x load"></i>
        ) : error ? (
          <p className="text-danger">Failed to load movies. Please try again.</p>
        ) : trandingTv && trandingTv.length > 0 ? (
          trandingTv.map((tv, index) => (
            <div className="col-md-3" key={index}>
              <div className="tv">
                <img
                  className="w-100 mt-3"
                  src={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
                  alt={tv.title}
                />
               <h6 className="tv-title">{tv.title}</h6>
               <p className="tv-overview">{tv.overview}</p>
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

export default Tv;

