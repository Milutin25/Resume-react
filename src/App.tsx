import React from 'react';

import './App.css';
import {Profile} from './Components/Profile'
import {RecentPosts} from './Components/RecentPosts'
import {Featured} from './Components/FeaturedWorks'

function App() {
  return (
    <>
    <Profile />
    <RecentPosts />
    <Featured />
    </>

  )
    
}

export default App;
