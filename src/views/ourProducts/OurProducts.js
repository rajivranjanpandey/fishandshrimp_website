import React, { useEffect } from 'react'
import "./ourProductsStyle.css"
import { Grid } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { DOMESTIC_PRODUCTS, IMPORTED_PRODUCTS } from '../../constants'


export default function OurProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const productType = searchParams.get('type');
    const isImportedProduct = productType === 'imported';
    const productsArr = isImportedProduct ? IMPORTED_PRODUCTS : DOMESTIC_PRODUCTS;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            {/* <div className='product_banner'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='product_text'>
                            <h1>Our Products</h1>
                            <p>The AI website builder that generates.</p>
                        </div>
                    </Grid>
                </Grid>
            </div> */}
            <div className='imported_product'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className='product_text'>
                            <h1>{isImportedProduct ? 'Imported' : 'Domestic'} Products</h1>
                            <p className='text_content'>
                                {
                                    isImportedProduct ?

                                        <>
                                            <b>Global Excellence served with the best quality seafood.</b>
                                            <p>Fish and Shrimp lets you discover the best taste in the world with every dining experience.
                                                Our imported fish range has diverse flavors, textures, and culinary ventures.
                                                Get introduced to the essence of international without compromising on freshness and quality, with Imported pangasius from Vietnam, Salmon fish from Norway, Hilsha fish from Bangladesh, and more.
                                            </p>
                                            <span className='break-word'><strong>RISTRO</strong> is the leading brand we work with for Pangasius and Basa fish and it offers</span>
                                            <p><strong>5 products:</strong></p>
                                            <ol className='margin-top-content' style={{ marginLeft: '1.2rem' }}>
                                                <li>Ristro premium (Vietnam panga)</li>
                                                <li>Ristro gold (Vietnam panga)</li>
                                                <li>Ristro delight (Vietnam panga)</li>
                                                <li>Ristro Delight plus (Vietnam panga)</li>
                                                <li>Ristro Aqua (Basa)</li>
                                            </ol>
                                            <br />
                                            <h3 className='break-word'>Explore the whole range of our imported products:</h3>
                                            <ul className='margin-top-content' style={{ marginLeft: '0.1rem', listStyle: 'none' }}>
                                                <li>Vietnam Basa</li>
                                                <li>Norway Salmon</li>
                                                <li>Gizzard from Barma</li>
                                                <li>Nile perch from Uganda</li>
                                                <li>Hilsha from Bangladesh</li>
                                            </ul>
                                        </>

                                        :
                                        <>
                                            <h3 className='break-word'>Do not miss out on the essence of local waters.</h3>
                                            <p> With a wide range of seafood sourced locally, Fish and Shrimp's curated selection of domestic fish products invites you to set sail on a gastronomic adventure, exploring the flavors of the sea. Our expert vision of selecting the best for your daily consumption has set the benchmark for a delightful culinary voyage. Indulge in the taste of local waters with our range of products like Shrimp, Crab, and others.</p>
                                            <br />
                                            <p>Fish and Shrimp offers an exceptional range of prawns with seven types of processed shrimps. We have been delivering and selling 500 tons of processed prawns across India. Across the diverse landscapes of the country, we have trusted networks and suppliers to source raw materials. Maintaining the quality and excellence of the prawns delivered from the suppliers, we process them in the factory. The materials are refined using state-of-the-art machinery, keeping our commitment to quality uncompromised and intact. From raw materials to processed prawns, the transformation is the witness of vision, dedication, and distinction.</p>
                                            <br />
                                            <p>The pipeline brand for an exquisite range of prawns is Crustan. Going beyond the ordinary, the brand also introduced an array of ready-to-eat products to elevate your culinary experience.</p>
                                            <br />
                                            <h3 className='break-word'>Check out the range of Ristro Gem processed prawns offered by its parent brand Fish and Shrimp:</h3>
                                            <ul style={{ listStyle: 'none', marginTop: '0.5rem' }}>
                                                <li>Ristro Gem <b>PDTO</b> - Peeled and Deveined Tails On</li>
                                                <li>Ristro Gem <b>PND</b> - Peeled and Deveined</li>
                                                <li>Ristro Gem <b>PUD</b> - Peeled and Un-deveined</li>
                                                <li>Ristro Gem <b>HLSO</b> - Headless Shell On</li>
                                                <li>Ristro Gem <b>PVPD</b> - Pull Vein Peeled and Deveined</li>
                                                <li>Ristro Gem <b>EZP</b> - Easy Peel</li>
                                                <li>Ristro Gem <b>BFL</b> - Butterfly</li>
                                            </ul>
                                            <br />
                                            <h3 className='break-word'>Explore the whole range of our domestic products:</h3>
                                            <ol style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
                                                <li>Shrimp/ Prawns</li>
                                                <li>Crab</li>
                                                <li>Squid</li>
                                                <li>Octopus</li>
                                                <li>Lobster</li>
                                                <li>Pomfret</li>
                                                <li>Vetki</li>
                                                <li>Hilsha</li>
                                            </ol>
                                        </>
                                }

                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='product_list_body'>
                <Grid container spacing={2} maxWidth="lg" margin="auto" alignItems="center">
                    {
                        productsArr.map((product) => {
                            return (
                                <Grid item xs={12} sm={4} md={4} key={product.name}>
                                    <div className="product_card">
                                        <div className="image_container">
                                            <div className="cover_image product_image">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                        </div>
                                        <div className="product_info">
                                            {/* <div className='d-flex align-items-center gap-15'>
                                                <a href="#" className="free_shipping">Free shipping</a>
                                                <div className="stock">
                                                    <div className="stock_status"></div>
                                                    <p className="stock_info">in stock.</p>
                                                </div>
                                            </div> */}
                                            <h3 className="product_name">{product.name}</h3>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    )
}
