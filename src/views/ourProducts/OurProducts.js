import React from 'react'
import "./ourProductsStyle.css"
import { Grid } from '@mui/material'


export default function OurProducts() {
    return (
        <>
            <div className='product_banner'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='banner_text'>
                            <h1>Our Products</h1>
                            <p>The AI website builder that generates.</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='product_list_body'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1" alt="" />
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
                                <p className="regular_price">1599$</p>
                                <p className="discount_price">799$</p>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1" alt="" />
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
                                <p className="regular_price">1599$</p>
                                <p className="discount_price">799$</p>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <div className="product_card">
                            <div className="image_container">
                                <div className="cover_image product_image">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alternate.nl%2Fp%2F600x600%2Fk%2FRazer_Kraken___Kitty_Edition___Quartz_gaming_headset%40%40kh-r59_31.jpg&f=1&nofb=1" alt="" />
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
                                <p className="regular_price">1599$</p>
                                <p className="discount_price">799$</p>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
