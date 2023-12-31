import React from 'react'
import "./aboutStyle.css"
import { Grid } from '@mui/material'
import businessPic from '../../assets/cover_image/about-us.jpg'
import fssaiImg from '../../assets/trade_logo/fssai.png';
import haccpImg from '../../assets/trade_logo/images.jpeg';
import isoImg from '../../assets/trade_logo/iso.jpeg';

export default function About() {
    return (
        <div class="about_section">
            {
                window.isMobileView &&
                <div className=''>
                    <img src={businessPic} alt='About Us' />
                </div>
            }
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center" textAlign='center'>
                <Grid item xs={12} sm={12} md={12}>
                    {
                        !window.isMobileView &&
                        <div className=''>
                            <img src={businessPic} alt='About Us' />
                        </div>
                    }

                    <div className='about_text'>
                        <p className='text_content'>
                            <div className='content'>
                                <h3 className={`title ${window.isMobileView ? 'mobile' : 'desktop'}`}>Company Overview</h3>
                                <p className='material'>The organization Fish and Shrimp started in the year 2019 as a small business. With a vision and mission to cater to premium highest quality standards of seafood from sourcing to delivery.</p>
                            </div>
                            <div className='content'>
                                <h3 className={`title ${window.isMobileView ? 'mobile' : 'desktop'}`}>Founder's Story</h3>
                                <p className='material'>In the heart of our seafood journey lies the compelling narrative of our founder, a visionary who takes customers on a journey of culinary seafood offerings. Here, meet our expert marine excellence founders.</p>

                                <div className='material_extended'>
                                    <div className='extended_child'>
                                        <h3>Abhishek Chakraborty (Director)</h3>
                                        <p>
                                            12 years of experience in Marketing as a team leader and
                                            specializing in sales and marketing of frozen foods. And also
                                            specialized in sales and marketing along with quality
                                            control.
                                        </p>
                                    </div>
                                    <div className='extended_child'>
                                        <h3>Argha Dey (Director)</h3>
                                        <p>Specialized in the import-export division along with quality
                                            control along with 10 years of experience in industrial Fish
                                            and Fisheries.</p>
                                    </div>
                                    <div className='extended_child'>
                                        <h3>Shib Shankar Paul (Managing Director)</h3>
                                        <p>A specialized person in managing team along with 12 years
                                            of experience in marketing as a team leader.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className={`title ${window.isMobileView ? 'mobile' : 'desktop'}`}>Meet Our Team</h3>
                                <div style={{ marginTop: '0.1rem' }}>
                                    <div className='extended_child'>
                                        <h3>Sampad Das (Accounts Manager)</h3>
                                        <p>Specialized in Financial Accounting.</p>
                                    </div>
                                    <div className='extended_child' style={{ marginBottom: '0.8rem' }}>
                                        <h3>Robin Roy (Operations in Charge)</h3>
                                        <p>4 years of experience in fish and fisheries.</p>
                                    </div>
                                    <div className='extended_child' style={{ marginBottom: '0.8rem' }}>
                                        <h3>Akshay Rabidas (Distribution Head)</h3>
                                        <p>4 years of experience in fish and fisheries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className={`title ${window.isMobileView ? 'mobile' : 'desktop'}`}>Other team members:</h3>
                                <p className='material'>We have a well-efficient team of <b>20 members</b> including quality control officers, Business Development Executives, and Sales Executives. They are working with sheer dedication and passion to take Fish and Shrimp to new heights. Our team of experts finds the best quality deliverables for our customers that can enrich their food experience.</p>

                            </div>
                            <div className='content'>
                                <h3 className={`title ${window.isMobileView ? 'mobile' : 'desktop'}`}>Quality Certifications</h3>
                                <p className='material'>The certifications are exhibits of Fish and Shrimp's commitment to excellence. It's the assurance that every product and service we offer meets the highest industry standards. The mark of quality that defines us as
                                    we are <b>ISO, fssai, HACCP, Halal</b> certified company
                                </p>
                                <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                                    <li>
                                        <img src={fssaiImg} alt='image' width='30' height='30' />
                                    </li>
                                    <li>
                                        <img src={haccpImg} width='30' height='30' alt='image' />
                                    </li>
                                    <li>
                                        <img src={isoImg} width='30' height='30' alt='image' />
                                    </li>
                                </ul>
                            </div>
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
