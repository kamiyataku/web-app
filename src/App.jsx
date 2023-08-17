import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { styled } from '@mui/system';
import { Link } from '@mui/material';
import Company from './pages/Company';
import Home from './pages/Home';
import {Route,BrowserRouter,Routes } from 'react-router-dom';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
});

function App() {


  return (
    <BrowserRouter>
    <div style={{ display: 'flex' }}>

      <CssBaseline />
      <StyledDrawer variant="permanent" anchor="left">
        <List>
          <Link href="/pages/Home" underline="none" color="inherit">
            <ListItem button >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
          </Link>
          <Link href="/pages/Company" underline="none" color="inherit">
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="会社概要" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="社長あいさつ" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="採用情報" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="ブログ" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="問い合わせ先" />
          </ListItem>
        </List>
      </StyledDrawer>
      <main >
        <Routes>
          <Route path="/pages/Home/*" element={<Home/>} />
          <Route path="/pages/Company/*" element={<Company />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
