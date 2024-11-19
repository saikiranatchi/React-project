import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
        <div className="hero">
            <h1>Welcome to the Indian Travel Guide</h1>
            <p>Explore the beautiful cities of India and plan your next journey with us.</p>
            <Link to="/destination">
                <button className="btn">Explore Destinations</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;