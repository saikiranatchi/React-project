import React from 'react';
import './Destination.css';
import agra from './images/Agra-Tajmahal.jpg';
import ahmedabad from './images/Ahmedabad-Atalbridge.jpg'
import delhi from './images/Delhi-Redfort.jpg';
import mumbai from './images/Mumbai.jpg';
import mysore from './images/Mysore.jpg';
import pune from './images/Pune.jpg';
import udaipur from './images/Udaipur.jpg';
import vizag from './images/Vizag.jpg';
import chennai from './images/Chennai-Marina.jpg';
import kolkata from './images/Kolkata-Howrah.jpg';
import bangalore from './images/Bangalore.webp';
import hyderabad from './images/Hyderabad-charminar.jpg';
import jaipur from './images/Jaipur-AmerFort.png';
import goa from './images/Goa.jpg';
import varanasi from './images/Varanasi-Ghat.jpg'

function Destination() {
  const cities = [
    { name: 'Pune', image: pune},
    { name: 'Udaipur', image: udaipur},
    { name: 'Vizag', image: vizag},
    { name: 'Ahmedabad', image: ahmedabad},
    { name: 'Agra', image: agra},
    { name: 'Delhi', image: delhi },
    { name: 'Mumbai', image: mumbai },
    { name: 'Mysore', image: mysore},
    { name: 'Chennai', image: chennai },
    { name: 'Kolkata', image: kolkata },
    { name: 'Bangalore', image: bangalore },
    { name: 'Hyderabad', image: hyderabad },
    { name: 'Jaipur', image: jaipur },
    { name: 'Goa', image: goa },
    {name: 'Varanasi', image: varanasi},
  ];

  return (
    <div className="destination-container">
      <h2>Popular Destinations in India</h2>
      <div className="cities-list">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <div className='img'>
            <img src={city.image} alt={city.name} />
            </div>
            <h3>{city.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;