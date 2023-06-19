import React from 'react'
import { Grid } from '@mui/material'
import businessLocations from "../../assets/business-locations.png"
import "./businessLocationsStyle.css"

export default function BusinessLocations() {
    return (
        <div className='business_location'>
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    <div className='banner_text'>
                        <h1>Our business locations</h1>
                        <p>The AI website builder that generates.</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <div className='location_bg'>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
