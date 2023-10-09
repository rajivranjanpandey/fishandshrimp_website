import React from 'react'
import { NavLink } from 'react-router-dom';


import './footerStyle.css';


export default function Footer() {
    return (
        <>
            <div className="footer_body">
                <div className='container'>
                    <div className='footer_grid'>
                        <div className='footer_about'>
                            <h4 className='footer_item_title'>FishandShrimp</h4>
                            <div className='break-word'>
                                A vision and mission to cater to premium highest quality standards of seafood from sourcing to delivery.
                            </div>
                        </div>
                        <div className=''>
                            <div className='footer_info_body'>
                                <div className='footer_item link'>
                                    <h4 class="footer_item_title">Explore</h4>
                                    <ul>
                                        <li><NavLink to='/products?type=domestic'>Domestic Products</NavLink></li>
                                        <li><NavLink to='/products?type=imported'>Imported Products</NavLink></li>
                                        <li><NavLink to='/business-locations'>Business Locations</NavLink></li>
                                        <li><NavLink to='/our-vision'>Our Vision</NavLink></li>
                                        <li><NavLink to='/terms-conditions'>Terms & Conditions</NavLink></li>
                                        <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                                        <li><NavLink to='/about-us'>About us</NavLink></li>
                                    </ul>
                                </div>
                                <div className='footer_item contact'>
                                    <h4 class="footer_item_title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div class="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:maiharmatafpo@gmail.com" className='break-word'> fishandshrimpdetails@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:7052602377" className='break-word'> 033 3592-9518</a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className='footer_item contact'>
                                    <h4 class="footer_item_title">Address</h4>
                                    <div>
                                        <span className='d-block'>Fish and Shrimp</span>
                                        <span className='d-block break-word'>48, J.C. Khan Road, Manasatala, P.O -Mankundu</span>
                                        <span className='d-block'>Hooghly, West Bengal</span>
                                        <span className='d-block'>Pin Code: 712139, INDIA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom footer_body">
                <div className='container'>
                    <div className='footer_grid_columns'>
                        <div class="copy_right">
                            ©Copyright 2023. All Rights Reserved by<NavLink to='/'> FishandShrimp</NavLink>
                        </div>
                        {/* <div>
                            <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                        <div class="terms">
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <a href="#">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
