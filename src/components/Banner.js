import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a description of the movie. It gives a brief overview of what
          the movie is about.
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
