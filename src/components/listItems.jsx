import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkspacePremiumOutlinedIcon from '@material-ui/icons/WorkspacePremiumOutlined';

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
        <WorkspacePremiumOutlinedIcon />
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
      <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Cart" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );