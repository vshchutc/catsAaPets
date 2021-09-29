import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './components/about/aboutpage/aboutpage';
import CatGalleryPage from './components/catgallery/catgallerypage/catgallerypage';
import FoundingPage from './components/founding/foundingpage/foundingpage';

import './App.scss'

function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Cat Gallery</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <Switch>
          
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/help">
            <FoundingPage />
          </Route>
          <Route path="/">
            <CatGalleryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
