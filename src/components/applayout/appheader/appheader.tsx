import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {
  Link
} from "react-router-dom";
import './appheader.scss';
import {Typography } from "@mui/material";




function AppHeaderComponent() {

  return (
        <AppBar position="static">
          <Toolbar sx={{justifyContent: 'flex-start'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding:'1rem' }}>
            <Link to="/">Cat Gallery</Link>
            </Typography>     
            <Typography variant="h6" component="div" sx={{ flexGrow: 0, padding:'1rem' }}>
              <Link to="/help">Help</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0, padding:'1rem' }}>
              <Link to="/about">About Us</Link>
            </Typography>
          </Toolbar>
        </AppBar>
  )
}

export default AppHeaderComponent
