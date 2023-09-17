
import React from 'react'
import './homeStyle.css';
import { Grid, Button, IconButton } from '@mui/material';
import MainBannerDesktop from '../../assets/main-banner/desktop.jpg'
import MainBannerMobile from '../../assets/main-banner/mobile.jpg';
import locationBanner from "../../assets/cover_image/location.jpg"
import visionBanner from "../../assets/cover_image/vision.jpg"
import { useNavigate } from 'react-router';
import { DOMESTIC_PRODUCTS, IMPORTED_PRODUCTS } from '../../constants';


export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='banner_section'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    {/* <Grid item xs={12} sm={5} md={5}>
                        <div className='banner_text'>
                            <h1>FishandShrimp</h1>
                        </div>
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={12}>
                        <div>
                            <img src={window.isMobileView ? MainBannerMobile : MainBannerDesktop} alt='fishandshrimp' />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='our_products'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='hedar_text'>
                            <p className='sub_hedar_text'>Fish and Shrimp Offerings</p>
                            <h2>Imported Products</h2>
                        </div>
                    </Grid>
                    {
                        IMPORTED_PRODUCTS.slice(0, 4).map((product, index) => {
                            return (
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className="product_card">
                                        <div className="image_container">
                                            <div className="cover_image product_image">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            {/* <div className='d-flex align-items-center gap-15'>
                                                <a href="#" className="free_shipping">Free shipping</a>
                                                <div className="stock">
                                                    <div className="stock_status"></div>
                                                    <p className="stock_info">in stock.</p>
                                                </div>
                                            </div> */}
                                            <h3 className="product_name">{product.name}</h3>
                                        </div>
                                        {
                                            (index === 3) &&
                                            <div className='overlayer' onClick={() => navigate('/products?type=imported')}>
                                                <div className='view_all'>
                                                    <IconButton aria-label="delete" color='Primary' variant="contained">
                                                        <i class="ri-arrow-right-line"></i>
                                                    </IconButton>
                                                    <h4>View All</h4>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <div className='our_products'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='hedar_text'>
                            {/* <p className='sub_hedar_text'>Our Products</p> */}
                            <h2>Domestic Products</h2>
                        </div>
                    </Grid>
                    {
                        DOMESTIC_PRODUCTS.slice(0, 4).map((product, index) => {
                            return (
                                <Grid item xs={12} sm={3} md={3}>
                                    <div className="product_card">
                                        <div className="image_container">
                                            <div className="cover_image product_image">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            {/* <div className='d-flex align-items-center gap-15'>
                                                <a href="#" className="free_shipping">Free shipping</a>
                                                <div className="stock">
                                                    <div className="stock_status"></div>
                                                    <p className="stock_info">in stock.</p>
                                                </div>
                                            </div> */}
                                            <h3 className="product_name">{product.name}</h3>
                                        </div>
                                        {
                                            (index === 3) &&
                                            <div className='overlayer' onClick={() => navigate('/products?type=domestic')}>
                                                <div className='view_all'>
                                                    <IconButton aria-label="delete" color='Primary' variant="contained">
                                                        <i class="ri-arrow-right-line"></i>
                                                    </IconButton>
                                                    <h4>View All</h4>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <div className='gradient_bg'>
                <div className='business_locations'>
                    <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                        <Grid item xs={12} sm={5} md={5}>
                            <div className='location_pic'>
                                <img src={locationBanner} alt='Business Location' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <div className='pl_75'>
                                <div className='others_hedar_text'>
                                    {/* <p className='sub_hedar_text'>Locations</p>
                                    <h2>Business Locations</h2> */}
                                    <p className='break-word'>Fish and Shrimp have its operational areas all over India including West Bengal, Odisha, Chhattisgarh, Haryana, and Patna. With our extensive customers, we also offer delivery for our products across India.</p>
                                </div>
                                <Button className='read_more' variant="text" endIcon={<i class="ri-arrow-right-line"></i>} onClick={() => navigate('/business-locations')}>
                                    Read more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={`business_locations ${window.isMobileView ? 'mobile_reverse' : ''}`}>
                    <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                        <Grid item xs={12} sm={5} md={5}>
                            <div>
                                <img src={visionBanner} alt='Our Vision' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <div className='pl_75'>
                                <div className='others_hedar_text'>
                                    {/* <h2>Our Vision</h2> */}
                                    <p className='break-word'>Delivering to our valued customers with our excellence,experience, and quality.</p>
                                </div>
                                <Button className='read_more' variant="text" endIcon={<i class="ri-arrow-right-line"></i>} onClick={() => navigate('/our-vision')}>
                                    Read more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </>
    )
}
