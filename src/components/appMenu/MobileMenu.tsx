import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from "react";
import { Link } from "react-router-dom";
import type { PageT } from "../../types";


type PropsT = {
  pages: PageT[]
}

const MobileMenu = ({ pages }: PropsT) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={Link}
        to={"/"}
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO Mobile
      </Typography>

      <Drawer
        id="menu-appbar"
        open={isMenuOpen}
        onClose={handleCloseMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          {pages.map((page) => (
            <ListItem
              key={page.title}
            >
              <ListItemButton
                onClick={handleCloseMenu}
                component={Link}
                to={page.link}
              >
                <ListItemText primary={page.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default MobileMenu;