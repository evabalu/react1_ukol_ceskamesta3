import { createRoot } from 'react-dom/client';
import './global.css';
import {cities} from './cz-cities.js';
import React from 'react';
import {City} from "./City/city.jsx";

const App = () => (
<>
  <h1>České mestá:</h1>
  <ul className='City'>
    {cities.map((city) => ( 
      <City 
      name={city.name}
      population={city.population}
      area={city.area}
      district={city.district}
      photo={city.photo}
      />
    ))}  
  </ul>
</>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);
