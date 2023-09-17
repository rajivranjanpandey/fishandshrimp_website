import React from 'react'
import { NavLink } from 'react-router-dom';
import fssaiImg from '../../assets/trade_logo/fssai.png';
import haccpImg from '../../assets/trade_logo/images.jpeg';
import isoImg from '../../assets/trade_logo/iso.jpeg';

import './footerStyle.css';


export default function Footer() {
    return (
        <>
            <div className="footer_body">
                <div className='container'>
                    <div className='footer_grid'>
                        <div className='footer_about'>
                            <h2>FishandShrimp</h2>
                            <p className='break-word'>
                                A vision and mission to cater to premium highest quality standards of seafood from sourcing to delivery
                            </p>
                        </div>
                        <div className=''>
                            <div className='footer_info_body'>
                                <div className='footer_item link'>
                                    <h4 class="footer_item_title">Explore</h4>
                                    <ul>
                                        <li><NavLink to='/products?type=imported'>Our Products</NavLink></li>
                                        <li><NavLink to='/business-locations'>Business Locations</NavLink></li>
                                        <li><NavLink to='/business-locations'>Our Vision</NavLink></li>
                                        <li><NavLink to='/about-us'>About us</NavLink></li>
                                    </ul>
                                </div>
                                <div className='footer_item contact'>
                                    <h4 class="footer_item_title">Contact Info</h4>
                                    <ul>
                                        <li>
                                            <div class="content">
                                                <strong>Address: </strong>
                                                Lorem Ipsum is simply dummy text of the printing typesetting industry.
                                            </div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                <strong>Email:</strong>
                                                <a href="mailto:maiharmatafpo@gmail.com"> maiharmatafpo@gmail.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="content">
                                                <strong>Phone:</strong>
                                                <a href="tel:7052602377"> +91 7052602377</a>
                                            </div>
                                        </li>

                                    </ul>
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
                            © Copyright 2023. All Rights Reserved by <br />
                            <NavLink to='/'>FishandsHrimp</NavLink>
                        </div>
                        <div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
