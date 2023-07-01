
import React from 'react'
import './homeStyle.css';
import { Grid, Button, IconButton, ImageListItem } from '@mui/material';
import MainBanner from '../../assets/mian_banner.png';
import productBanner from "../../assets/locations.png"
import VisionPic from "../../assets/Vision.png"
import seaPrawns from "../../assets/sea-prawns.jpg"
import { useNavigate } from 'react-router';


export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='banner_section'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={5} md={5}>
                        <div className='banner_text'>
                            <h1>FishandShrimp</h1>
                            <p>Eat Fresh Stay Healthy</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <div>
                            <img src={MainBanner} alt='fishandshrimp' />
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* <div className='our_products'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='hedar_text'>
                            <p className='sub_hedar_text'>Best Products</p>
                            <h2>Our Products</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='our_product_info'>
                            <ImageList
                                variant="quilted"
                                cols={4}
                                rowHeight={250}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 250, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='read_more_body'>
                            <Button className='read_more' variant="text" endIcon={<i class="ri-arrow-right-line"></i>}>
                                Read more
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div> */}
            <div className='our_products'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='hedar_text'>
                            <p className='sub_hedar_text'>Our Products</p>
                            <h2>Imported Products</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                            <div className='overlayer' onClick={() => navigate('/products?type=imported')}>
                                <div className='view_all'>
                                    <IconButton aria-label="delete" color='Primary' variant="contained">
                                        <i class="ri-arrow-right-line"></i>
                                    </IconButton>
                                    <h4>View All</h4>
                                </div>
                            </div>
                        </div>
                    </Grid>
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
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src={seaPrawns} alt="" />
                                </div>
                            </div>
                            <div className="product_info">
                                <div className='d-flex align-items-center gap-15'>
                                    <a href="#" className="free_shipping">Free shipping</a>
                                    <div className="stock">
                                        <div className="stock_status"></div>
                                        <p className="stock_info">in stock.</p>
                                    </div>
                                </div>
                                <h3 className="product_name">Razer Kraken Kitty Edt Gamming Headset Quartz</h3>
                            </div>
                            <div className='overlayer' onClick={() => navigate('/products?type=domestic')}>
                                <div className='view_all'>
                                    <IconButton aria-label="delete" color='Primary' variant="contained">
                                        <i class="ri-arrow-right-line"></i>
                                    </IconButton>
                                    <h4>View All</h4>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='gradient_bg'>
                <div className='business_locations'>
                    <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                        <Grid item xs={12} sm={5} md={5}>
                            <div className='location_pic'>
                                <img src={productBanner} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <div className='pl_75'>
                                <div className='others_hedar_text'>
                                    <p className='sub_hedar_text'>Locations</p>
                                    <h2>Business Locations</h2>
                                    <p>The AI website builder that generates an entire website with images and copy in seconds.</p>
                                </div>
                                <Button className='read_more' variant="text" endIcon={<i class="ri-arrow-right-line"></i>}>
                                    Read more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='business_locations mobile_reverse'>
                    <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                        <Grid item xs={12} sm={7} md={7}>
                            <div className='pl_75'>
                                <div className='others_hedar_text'>
                                    <h2>Our Vision</h2>
                                    <p>The AI website builder that generates an entire website with images and copy in seconds.</p>
                                </div>
                                <Button className='read_more' variant="text" endIcon={<i class="ri-arrow-right-line"></i>}>
                                    Read more
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5}>
                            <div>
                                <img src={VisionPic} />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </>
    )
}
