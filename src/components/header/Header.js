import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import './headerStyle.css';

const drawerWidth = 350;

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className="mobile_menu">
            <NavLink className='logo' to='/'>FishandsHrimp</NavLink>
            <List>
                <NavLink to='/products'>Our Products</NavLink>
                <NavLink to='/business-locations'>Business Locations</NavLink>
                <NavLink to='/our-vision'>Our Vision</NavLink>
                <NavLink to='/about-us'>About us</NavLink>
            </List>
        </Box>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex', marginTop: 8 }}>
            <AppBar component="nav" className='desktop_menu_body'>
                <Toolbar>
                    <div className='mobile_header'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NavLink className='logo mobile_logo' to='/'>FishandsHrimp</NavLink>
                    </div>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                    >
                        <NavLink className='logo' to='/'>FishandsHrimp</NavLink>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} className="menu_body">
                        <NavLink to='/products'>Our Products</NavLink>
                        <NavLink to='/business-locations'>Business Locations</NavLink>
                        <NavLink to='/our-vision'>Our Vision</NavLink>
                        <NavLink to='/about-us'>About us</NavLink>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;

