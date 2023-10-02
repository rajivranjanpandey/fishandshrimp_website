import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './headerStyle.css';
import companyLogo from '../../assets/logo.png';
import { Divider } from '@mui/material';

const drawerWidth = 350;

function Header(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box className="mobile_menu">
            <div className='mobile_logo_body'>
                <IconButton
                    color="inherit" onClick={handleDrawerToggle}>
                    <i class="ri-close-line"></i>
                </IconButton>
                <NavLink className='logo' to='/' onClick={handleDrawerToggle}>
                    Fish And Shrimp
                </NavLink>
            </div>
            <List onClick={handleDrawerToggle}>
                <NavLink to='/products?type=domestic'>Domestic Products</NavLink>
                <Divider />

                <NavLink to='/products?type=imported'>Products We Import</NavLink>
                <Divider />

                <NavLink to='/business-locations'>Business Locations</NavLink>
                <Divider />

                <NavLink to='/our-vision'>Our Vision</NavLink>
                <Divider />

                <NavLink to='/terms-conditions'>Terms & Conditions</NavLink>
                <Divider />

                <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
                <Divider />

                <NavLink to='/about-us'>About Us</NavLink>

                {/* <Accordion className='dropdowen'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> Our Products</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <MenuItem onClick={() => { navigate('/products?type=imported'); handleDrawerToggle() }}>Imported products</MenuItem>
                        <MenuItem onClick={() => { navigate('/products?type=domestic'); handleDrawerToggle() }}>Domestic products</MenuItem>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <NavLink to='/business-locations' onClick={handleDrawerToggle}>Business Locations</NavLink>
                <Divider />
                <NavLink to='/our-vision' onClick={handleDrawerToggle}>Our Vision</NavLink>
                <Divider />
                <NavLink to='/about-us' onClick={handleDrawerToggle}>About us</NavLink>
                 */}
            </List >
        </Box >
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
                        <img src={companyLogo} style={{ height: '45px', width: '45px' }} alt='logo' />
                        <NavLink className='logo mobile_logo' to='/'>Fish And Shrimp</NavLink>
                    </div>
                    {
                        !window.isMobileView &&
                        <img src={companyLogo} style={{ height: '68px', width: '68px' }} alt='logo' />
                    }
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}
                    >
                        <NavLink className='logo' to='/'>Fish And Shrimp</NavLink>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} className="menu_body">
                        <div className='menus'>
                            <Accordion className='dropdowen'>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Our Products</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <MenuItem onClick={() => navigate('/products?type=imported')}>Imported products</MenuItem>
                                    <MenuItem onClick={() => navigate('/products?type=domestic')}>Domestic products</MenuItem>
                                </AccordionDetails>
                            </Accordion>
                            <NavLink to='/business-locations'>Business Locations</NavLink>
                            <NavLink to='/our-vision'>Our Vision</NavLink>
                            <NavLink to='/about-us'>About us</NavLink>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    className='mobile_drawer'
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

        </Box >
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

