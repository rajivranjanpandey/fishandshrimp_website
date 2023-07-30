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
                            <h1>{isImportedProduct ? 'Imported' : 'Domestic'} products</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
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
