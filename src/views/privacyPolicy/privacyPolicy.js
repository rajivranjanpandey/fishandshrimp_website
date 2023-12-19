import React from 'react'
import { Grid } from '@mui/material'
import "./privacyPolicy.css"



export default function PrivacyPolicy() {
    return (
        <div class="privacy_policy_section">
            <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    <div className='head_content'>
                        <h1>Privacy Policy</h1>
                        <p className='break-word'>This Privacy Policy describes how Fish and Shrimp ("we," "us," or "our") collects, uses, and discloses information that we obtain through our website <a href='/'>https://fishandshrimp.in</a> (the "Site"). Your use of the Site indicates your acceptance of this Privacy Policy.</p>
                    </div>
                    <div className='head_content'>
                        <h1>Information We Collect</h1>
                        <div className='other_information'>
                            <p className='break-word'>
                                <b>Personal Information:</b> When you visit our Site, we may collect personal information that you provide voluntarily, such as your name, email address, phone number, and any other information you choose to provide.
                            </p>
                            <p className='break-word'>
                                <b>Automatically Collected Information:</b> When you visit our Site, we may collect personal information that you provide voluntarily, such as your name, email address, phone number, and any other information you choose to provide.
                            </p>
                        </div>
                    </div>
                    <div className='head_content'>
                        <h1>How We Use Your Information</h1>
                        <p className='break-word'>We may use the information we collect for various purposes, including:</p>
                        <ul className='margin-left-content information'>
                            <li className='break-word'>To provide and maintain our Site</li>
                            <li className='break-word'>To communicate with you about our products, services, and promotions.</li>
                            <li className='break-word'>To analyze and improve the Site's performance and user experience</li>
                            <li className='break-word'>To comply with legal obligations</li>

                        </ul>
                    </div>
                    <div className='head_content'>
                        <h1>Disclosure of Information</h1>
                        <p className='break-word'>We may share your information with third parties, including service providers, business partners, or law enforcement authorities, under the following circumstances:</p>
                        <ul className='margin-left-content information'>
                            <li className='break-word'>With your consent</li>
                            <li className='break-word'>To comply with legal obligations or respond to lawful requests</li>
                            <li className='break-word'>To protect the rights, property, or safety of Fish and Shrimp, our users, or others</li>
                        </ul>
                    </div>
                    <div className='head_content'>
                        <h1>Data Security</h1>
                        <p className='break-word'>We take reasonable measures to protect the security of your information. However, please note that no method of transmission over the Internet or method of electronic storage is completely secure.</p>
                    </div>
                    <div className='head_content'>
                        <h1>Third-Party Links</h1>
                        <p className='break-word'>
                            Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </div>
                    <div className='head_content'>
                        <h1>Changes to This Policy</h1>
                        <p className='break-word'>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </div>
                    <div className='head_content'>
                        <h1>Contact Us</h1>
                        <p className='break-word'>
                            If you have any questions or concerns about this Privacy Policy, please contact us at fishandshrimpdetails@gmail.com
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
