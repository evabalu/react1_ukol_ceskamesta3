import React from "react";

export const City = ({ name, population, area, district, photo }) => {
    return (
      <li className="city">
        <div>
        <p className='city__name'>{name}</p>
        <p className='city__population'>Počet obyvateľov: {population}</p>
        <p className='city__area'>Rozloha: {area} m2</p>
        <p className='city__district'>Okres: {district}</p>
        <img className='city__img' src={photo}/>
        </div>
      </li>
    );
  };

  