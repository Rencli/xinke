import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItem, setMenuItem] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { 
      text: '首页', 
      path: '/' 
    },
    { 
      text: '关于我们', 
      path: '/about',
      subMenu: [
        { text: '公司历史', path: '/about#history' },
        { text: '资质荣誉', path: '/about#qualification' },
        { text: '团队介绍', path: '/about#team' },
      ]
    },
    { 
      text: '产品与服务', 
      path: '/products',
      subMenu: [
        { text: '换热器系列', path: '/products#heat-exchanger' },
        { text: '蒸发设备', path: '/products#evaporator' },
        { text: '定制服务', path: '/products#custom' },
      ]
    },
    { 
      text: '行业解决方案', 
      path: '/solutions',
      subMenu: [
        { text: '电力行业', path: '/solutions#power' },
        { text: '暖通空调', path: '/solutions#hvac' },
        { text: '化工制药', path: '/solutions#chemical' },
      ]
    },
    { text: '新闻中心', path: '/news' },
    { text: '联系我们', path: '/contact' },
  ];

  const handleMenuOpen = (event, item) => {
    setAnchorEl(event.currentTarget);
    setMenuItem(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuItem(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <React.Fragment key={item.path}>
          <ListItem 
            component={RouterLink} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
          {item.subMenu && item.subMenu.map(subItem => (
            <ListItem 
              key={subItem.path}
              component={RouterLink} 
              to={subItem.path}
              onClick={handleDrawerToggle}
              sx={{ 
                textDecoration: 'none', 
                color: 'inherit',
                pl: 4 
              }}
            >
              <ListItemText primary={subItem.text} />
            </ListItem>
          ))}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'white',
          color: 'primary.main',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            新科恒辰信息技术工程有限公司
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 3,
                alignItems: 'center'
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                  sx={{ 
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.04)'
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </Box>
  );
};

export default Navbar;