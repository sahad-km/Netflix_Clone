import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action, trending,upcoming,topRated} from './urls'
import './App.css';

function App() {
  return (
    <div className='App' >
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Trending Now' isSmall />
      <RowPost url={upcoming} title='Upcoming Movies' isSmall/>
      <RowPost url={topRated} title='Top Rated' isSmall/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;