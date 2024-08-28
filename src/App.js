import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl="URL_HERE" isLargeRow />
      <Row title="Trending Now" fetchUrl="URL_HERE" />
      <Row title="Top Rated" fetchUrl="URL_HERE" />
      <Row title="Action Movies" fetchUrl="URL_HERE" />
      <Row title="Comedy Movies" fetchUrl="URL_HERE" />
      <Row title="Horror Movies" fetchUrl="URL_HERE" />
      <Row title="Romance Movies" fetchUrl="URL_HERE" />
      <Row title="Documentaries" fetchUrl="URL_HERE" />
    </div>
  );
}

export default App;
