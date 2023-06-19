
import React from 'react'
import './homeStyle.css';
import { Grid, Button, ImageList, ImageListItem } from '@mui/material';
import MainBanner from '../../assets/mian_banner.png';
import productBanner from "../../assets/locations.png"
import VisionPic from "../../assets/Vision.png"


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },


];
export default function Home() {
    return (
        <>
            <div className='banner_section'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={5} md={5}>
                        <div className='banner_text'>
                            <h1>Build a website in 30 seconds with AI.</h1>
                            <p>The AI website builder that generates an entire website with images and copy in seconds.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <div>
                            <img src={MainBanner} />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='our_products'>
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
                <div className='business_locations'>
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
