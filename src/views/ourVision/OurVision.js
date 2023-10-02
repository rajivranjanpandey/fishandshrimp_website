import React from 'react'
import { Grid } from '@mui/material'
import "./OurVisionStyle.css"
import VisionPic from "../../assets/cover_image/vision.jpg"



export default function OurVision() {
    return (
        <div class="our_vision_section">
            {
                window.isMobileView &&
                <div className=''>
                    <img src={VisionPic} alt='Our Vision' />
                </div>
            }
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    {
                        !window.isMobileView &&
                        <div className=''>
                            <img src={VisionPic} alt='Our Vision' />
                        </div>
                    }
                    <div className='our_vision_text'>
                        <p className='text_content'>
                            <p><b>We aim to elevate your dining experience with a premium seafood range.</b></p>
                            <br />
                            <p><b>Fish and Shrimp has been started with the vision of:</b></p>

                            <ul className='margin-left-content'>
                                <li className='break-word'>Enriching your taste buds with premium quality exotic seafood.</li>
                                <li className='break-word'>Providing the freshest, highest-quality seafood to customers, sourced from trusted suppliers and fishermen.</li>
                                <li className='break-word'>Redefining seafood in terms of texture, taste, and flavor that can expand the gastronomic horizons.</li>
                                <li className='break-word'>Aiming to leverage technology to enhance our services, from user-friendly ordering to eco-friendly packaging.</li>
                                <li className='break-word'>Being customer-centric, with a goal to create an exceptional seafood experience and to cater to the customer’s needs with a diverse selection.</li>
                                <li className='break-word'>Prioritizing transparency, sharing information about the origin and sourcing of our seafood, so customers can make informed choices.</li>
                                <li className='break-word'>Promising to deliver seafood that's not only sustainable but also exceptionally fresh, ensuring every meal is a culinary delight.</li>
                            </ul>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
