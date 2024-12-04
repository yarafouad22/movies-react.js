import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Gallery() {
    let [people,setGallery]=useState([]);
    async function getGallery() {
        let {data}=await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=971b05a0d7a4c64de1f446c0987defbf`);
    console.log(data);
   setGallery(data.results);
    }
    useEffect(()=>{
         getGallery();
      },[]);
     
  return (
    <div>
      <h2 className='text'>Popular People</h2>
      {people.length > 0 ? (
        <div className="row">
          {people.map((person) => (
            <div key={person.id} className="col-md-3">
              <div className="person-card">
                {person.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt={person.name}
                    className="w-100"
                    />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
                <h5>{person.name}</h5>
                <p>{person.known_for_department}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading popular people...</p>
      )}
    </div>
  );
}