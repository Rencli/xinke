import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  useTheme, 
  useMediaQuery,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState({});
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
        { text: '公司简介', path: '/about/intro' },
        { text: '我们的资质', path: '/about/certificates' }
      ]
    },
    { 
      text: '产品与服务', 
      path: '/products',
      subMenu: [
        { text: '云与智能', path: '/products#cloud-intelligence' },
        { text: '公共安全', path: '/products#public-safety' },
        { text: '智慧网络', path: '/products#smart-network' },
        { text: '数智计算', path: '/products#digital-computing' },
        { text: '网络安全', path: '/products#network-security' },
        { text: '企业办公', path: '/products#enterprise-office' }
      ]
    },
    { 
      text: '经典案例', 
      path: '/solutions',
      subMenu: [
        { text: '政府机关', path: '/solutions#government' },
        { text: '金融机构', path: '/solutions#finance' },
        { text: '教育机构', path: '/solutions#education' },
        { text: '交通运输', path: '/solutions#transport' },
        { text: '工业企业', path: '/solutions#industry' },
        { text: '更多案例', path: '/solutions#more' }  // 添加查看更多选项
      ]
    },
    { text: '工程实景', path: '/projects' },  // 修改这一行
    { text: '联系我们', path: '/contact' }
  ];

  const handleClick = (event, path) => {
    setAnchorEl({
      ...anchorEl,
      [path]: event.currentTarget
    });
  };

  const handleClose = (path) => {
    setAnchorEl({
      ...anchorEl,
      [path]: null
    });
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

  const handleMenuClick = (path, subPath) => {
    handleClose(path);
    if (subPath && subPath.includes('#')) {
      const id = subPath.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'primary.main' }}>
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
            新疆新科恒辰信息技术工程有限公司
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
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Box key={item.path}>
                  <Button
                    color="inherit"
                    onClick={(e) => item.subMenu && handleClick(e, item.path)}
                    component={!item.subMenu ? RouterLink : undefined}
                    to={!item.subMenu ? item.path : undefined}
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
                  {item.subMenu && (
                    <Menu
                      anchorEl={anchorEl[item.path]}
                      open={Boolean(anchorEl[item.path])}
                      onClose={() => handleClose(item.path)}
                    >
                      {item.subMenu.map((subItem) => (
                        <MenuItem
                          key={subItem.path}
                          component={RouterLink}
                          to={subItem.path}
                          onClick={() => handleMenuClick(item.path, subItem.path)}
                        >
                          {subItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
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
    </Box>
  );
};

export default Navbar;