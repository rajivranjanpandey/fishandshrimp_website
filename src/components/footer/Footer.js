import React from 'react'

import './footerStyle.css';
import { NavLink } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <div className="footer_body">
                <div className='container'>
                    <div className='footer_grid'>
                        <div className='footer_about'>
                            <h2>FishandShrimp</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                    <div className='footer_grid'>
                        <div class="copy_right">
                            <p>© Copyright 2023. All Rights Reserved by  <NavLink to='/'>FishandsHrimp</NavLink></p>
                        </div>
                        <div class="terms">
                            <ul>
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
