import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BookOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="My Learning" />
    
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <LocalLibraryOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Learning Path" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Performance" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ShoppingCartOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);
