import React from 'react'
import { Grid } from '@mui/material'
import businessLocations from "../../assets/cover_image/location.jpg"
import "./businessLocationsStyle.css"

export default function BusinessLocations() {
    return (
        <div className='business_location'>
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    <div className=''>
                        <img src={businessLocations} alt='Business Location' />
                    </div>
                    <div className='business_text'>
                        <h1>Our business locations</h1>
                        <p>
                            <p><b>Discover the locations of Fish and Shrimp functions</b></p>
                            <br />
                            <p>Fish and Shrimp operates in a wide range of locations across India and has a significant demographical presence. It helps us to reach our clients with ease while keeping the charges and pricing of the products in an affordable range.</p>
                            <br />
                            <br />
                            <h2>Our prime address:</h2>
                            <br />
                            <p><b>The locations we operate are:</b></p>
                            <br />
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

                            <h2>Odisha</h2>

                            <h2>Chhattisgarh</h2>

                            <h2>Haryana</h2>

                            <h2>Patna</h2>
                            <br />
                            <br />
                            <h2>Infrastructure and Accessibility</h2>
                            <p>The infrastructure we follow helps channel the transportation networks, which helps to distribute the products efficiently. Functioning in multiple areas helps our customers to have better accessibility to our services.</p>
                            <br />
                            <br />
                            <h2>Commitment to sustainability</h2>
                            <p>The strategic choice of locations ensures Fish and Shrimp contributes towards a more sustainable future. Reducing carbon footprints, reducing transportation impacts, and contributing to the local economy are our aims.</p>
                            <br />
                            <br />
                            <h2>Get in Touch:</h2>
                            <p>Phone: +91 33 3592 9518</p>
                            <p>Email: <a href="mailto:fishandshrimpdetails@gmail.com">fishandshrimpdetails@gmail.com</a></p>
                            <br />
                            <h2>Join Us at Fish and Shrimp</h2>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
