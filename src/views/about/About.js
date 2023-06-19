import React from 'react'
import "./aboutStyle.css"
import { Grid } from '@mui/material'

export default function About() {
    return (
        <div class="about-section">
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={5} md={5}>
                    <div class="image-column">
                        <div class="inner-column wow fadeInLeft">
                            <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a></figure>
                            <figure class="image-2"><a href="#" class="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt="" /></a></figure>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                    <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="title">About Company</span>
                                <h2>We are leader in <br></br>Industrial market Since 1992</h2>
                            </div>
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.</div>
                            <ul class="list-style-one">
                                <li><i class="ri-check-line"></i>Lorem Ipsum is simply dummy tex</li>
                                <li><i class="ri-check-line"></i>Consectetur adipisicing elit</li>
                                <li><i class="ri-check-line"></i>Sed do eiusmod tempor incididunt</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
