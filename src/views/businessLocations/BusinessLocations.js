import React from 'react'
import { Grid } from '@mui/material'
import businessLocations from "../../assets/cover_image/location.jpg"
import "./businessLocationsStyle.css"

export default function BusinessLocations() {
    return (
        <div className='business_location'>
            {
                window.isMobileView &&
                <div>
                    <img src={businessLocations} alt='Business Location' />
                </div>
            }
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    {
                        !window.isMobileView &&
                        <div>
                            <img src={businessLocations} alt='Business Location' />
                        </div>
                    }
                    <div className='business_text'>
                        <p className='text_content'>
                            <h2 className='title'>Discover the locations of Fish and Shrimp functions</h2>
                            <p className='content'>Fish and Shrimp operates in a wide range of locations across India and has a significant demographical presence. It helps us to reach our clients with ease while keeping the charges and pricing of the products in an affordable range.</p>

                            <h2 className='title'>The locations we operate are:</h2>
                            <p className='content'>
                                <h2>West Bengal</h2>
                                <ul className='margin-left-content'>
                                    <li>Kolkata</li>
                                    <li>Howrah</li>
                                    <li>Hooghly</li>
                                    <li>South 24 Pargana</li>
                                    <li>North 24 Pargana</li>
                                    <li>Tamluk</li>
                                    <li>Midnapore town</li>
                                    <li>Burdwan</li>
                                    <li>Bankura</li>
                                    <li>Bolepur</li>
                                    <li>Durgapur</li>
                                    <li>Asansol</li>
                                    <li>Haldia</li>
                                    <li>Kharagpur</li>
                                    <li>Digha</li>
                                    <li>Siliguri</li>
                                    <li>Birbhum</li>
                                </ul>
                                <h2>Odisha, Chhattisgarh, Haryana, Patna</h2>
                            </p>

                            <h2 className='title'>Infrastructure and Accessibility</h2>
                            <p className='content'>The infrastructure we follow helps channel the transportation networks, which helps to distribute the products efficiently. Functioning in multiple areas helps our customers to have better accessibility to our services.</p>

                            <h2 className='title'>Commitment to sustainability</h2>
                            <p className='content'>The strategic choice of locations ensures Fish and Shrimp contributes towards a more sustainable future. Reducing carbon footprints, reducing transportation impacts, and contributing to the local economy are our aims.</p>

                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
