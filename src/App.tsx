import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutPage from './components/about/aboutpage/aboutpage';
import CatGalleryPage from './components/catgallery/catgallerypage/catgallerypage';
import FoundingPage from './components/founding/foundingpage/foundingpage';
import AppHeaderComponent from "./components/applayout/appheader/appheader";

import './App.scss'


function App() {

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppHeaderComponent />
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
      </Box>
    </Router>
  )
}

export default App
