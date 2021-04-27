import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';

import NavItem from './NavItem';


const items = [
  {
    href: '/app/dashboard',
    title: '전체'
  },
  {
    href: '/app/customers',
    title: '여성의류'
  },
  {
    href: '/app/products',
    title: '남성의류'
  },
  {
    href: '/app/account',
    title: '아동의류'
  },
  {
    href: '/app/settings',
    title: '스포츠'
  },
  {
    href: '/login',
    title: '악세서리'
  },
  {
    href: '/register',
    title: '장애보조용품'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);


  return (
    <>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
            />
          ))}
        </List>
      </Box>
    </Box>
    </>
  );
};


export default DashboardSidebar;