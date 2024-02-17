import '/global.css';
import React from "react";

export const City = ({ name, population, area, district, photo }) => {
    return (
      <li className="city">
        <div className='city__name'>{name}</div>
        <div className='city__population'>Počet obyvateľov: {population}</div>
        <div className='city__area'>Rozloha: {area} m2</div>
        <div className='city__district'>Okres: {district}</div>
        <img className='city__img' src={photo}/>
      </li>
    );
  };

  