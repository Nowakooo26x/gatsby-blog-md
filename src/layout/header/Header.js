import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Header = () => {
  const {site: {siteMetadata: { title, menu: menuList}}} = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
        menu {
          link
          title
        }
      }
    }
  }
  `)

    const [state, setState] = React.useState({
        top: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <nav>
                <List>
                    {menuList.map((item, index) => (
                    <ListItem button key={item.link}>
                        <ListItemIcon>
                          <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                    ))}
                </List>
            </nav>
          <Divider />
        </Box>
      );

    return (
        <header>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton onClick={toggleDrawer('top', true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                  {title}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
            <nav>
                <Drawer
                    anchor={'top'}
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                >
                    {list('top')}
                </Drawer>
            </nav>
        </header>
    )
}

export default Header