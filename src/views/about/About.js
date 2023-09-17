import React from 'react'
import "./aboutStyle.css"
import { Grid } from '@mui/material'
import businessPic from '../../assets/cover_image/about-us.jpg'


export default function About() {
    return (
        <div class="about_section">
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    <div className=''>
                        <img src={businessPic} alt='About Us' />
                    </div>
                    <div className='about_text'>
                        <h1>About Us</h1>
                        <p className='text_content'>
                            <h3>Company Overview</h3>
                            <p>The organization Fish and Shrimp started in the year 2019 as a small business. With a vision and mission to cater to premium highest quality standards of seafood from sourcing to delivery.</p>

                            <br />

                            <h3>Founder's Story</h3>
                            <p>In the heart of our seafood journey lies the compelling narrative of our founder, a visionary who takes customers on a journey of culinary seafood offerings. Here, meet our expert marine excellence founders.</p>
                            <br />
                            <div>
                                <div style={{ marginBottom: '0.6rem' }}>
                                    <h3>Abhishek Chakraborty</h3>
                                    <strong>Director</strong>
                                    <p>12 years of experience in Marketing as a team leader and specializing in sales and marketing of frozen foods.</p>
                                    <p>Specialized in sales and marketing along with quality control.</p>
                                </div>
                                <div style={{ marginBottom: '0.6rem' }}>
                                    <h3>Shib Shankar Paul</h3>
                                    <strong>Managing director</strong>
                                    <p>12 years of experience in marketing as a team leader.</p>
                                    <p>Specialized in team management and Marketing.</p>
                                </div>
                                <div>
                                    <h3>Argha Dey</h3>
                                    <strong>Director</strong>
                                    <p>10 years of experience in industrial Fish and Fisheries.</p>
                                    <p> Specialized in the import-export division along with quality control.</p>
                                </div>
                            </div>

                            <h3 className='margin-top-content'>Meet Our Team</h3>
                            <div>
                                <div style={{ marginBottom: '0.6rem', marginTop: '0.5rem' }}>
                                    <h3>Sampad Das</h3>
                                    <strong>Accounts Manager</strong>
                                    <p>Specialized in Financial Accounting.</p>
                                </div>
                                <div style={{ marginBottom: '0.6rem' }}>
                                    <h3>Robin Roy</h3>
                                    <strong>Operation In Charge</strong>
                                    <p>4 years of experience in fish and fisheries.</p>
                                </div>
                                <div style={{ marginBottom: '0.6rem' }}>
                                    <h3>Akshay Robi Das</h3>
                                    <strong>Distribution Head</strong>
                                    <p>4 years of experience in fish and fisheries.</p>
                                </div>
                                <div style={{ marginBottom: '0.6rem' }}>
                                    <h3>Other team members:</h3>
                                    <p>We have a well-efficient team of 20 members including quality control officers, Business Development Executives, and Sales Executives. They are working with sheer dedication and passion to take Fish and Shrimp to new heights. Our team of experts finds the best quality deliverables for our customers that can enrich their food experience.</p>
                                </div>
                            </div>
                            <br />
                            <h2>Quality Certifications</h2>
                            <p>The certifications are exhibits of Fish and Shrimp's commitment to excellence. It's the assurance that every product and service we offer meets the highest industry standards. The mark of quality that defines us as,</p>
                            <strong>We are</strong>
                            <ul className='margin-left-content'>
                                <li>ISO</li>
                                <li>fssai</li>
                                <li>HACCP</li>
                                <li>Halal</li>
                            </ul>
                            <span>Certfied.</span>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
