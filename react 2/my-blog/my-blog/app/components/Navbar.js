"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; 
import { useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link'; 

const Navbar = () => {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    
    
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); 

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleNavigation = (path) => {
        setDrawerOpen(false); 
        router.push(path); 
    };

    
    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'EPIC', path: '/epic' },
        { text: 'Contact', path: '/contact' },
    ];

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    My Website
                </Typography>

                
                {!isSmallScreen && menuItems.map((item, index) => (
                    <Button
                        key={index}
                        color="inherit"
                        onClick={() => handleNavigation(item.path)} 
                    >
                        {item.text}
                    </Button>
                ))}
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
    <List>
        {menuItems.map((item, index) => (
            <ListItem button key={index}>
                <Link href={item.path} passHref>
                    <ListItemText primary={item.text} />
                </Link>
            </ListItem>
        ))}
    </List>
</Drawer>
        </AppBar>
    );
};

export default Navbar;
