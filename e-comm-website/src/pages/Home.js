import React from 'react';
import { useState } from 'react';

function Home(props) {
    return (
    <div>
    
    {/*Body Content*/}
    <div id="page-content">
    {/*Home slider*/}
    	<div class="slideshow slideshow-wrapper pb-section">
        	<div class="home-slideshow">
            	<div class="slide slideshow--medium">
                	<div class="blur-up lazyload">
                        <img class="blur-up lazyload" data-src="assets/images/slideshow-banners/home12-category-banner1.jpg" src="assets/images/slideshow-banners/home12-category-banner1.jpg" alt="Outfit of Today" title="Outfit of Today" />
                        <div class="slideshow__text-wrap slideshow__overlay classic middle">
                            <div class="slideshow__text-content classic left">
                            	<div class="container">
                                    <div class="wrap-caption left">
                                        <h2 class="h1 mega-title slideshow__title">Outfit of Today</h2>
                                        <span class="mega-subtitle slideshow__subtitle">Lookbook ss 2018</span>
                                        <span class="btn">View Catelog</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide slideshow--medium">
                	<div class="blur-up lazyload">
                        <img class="blur-up lazyload" data-src="assets/images/slideshow-banners/home12-category-banner2.jpg" src="assets/images/slideshow-banners/home12-category-banner2.jpg" alt="Accessories" title="Accessories" />
                        <div class="slideshow__text-wrap slideshow__overlay classic middle">
                            <div class="slideshow__text-content classic left">
                            	<div class="container">
                                    <div class="wrap-caption left">
                                        <h2 class="h1 mega-title slideshow__title">Accessories</h2>
                                        <span class="mega-subtitle slideshow__subtitle">New Collection A-W ss18</span>
                                        <span class="btn">Shop now</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*End Home slider*/}
        
      	{/*Feature Content*/}
        <div className="section feature-content">
            <div className="container">
                <div className="row">
                    <div className="feature-row">
                        <div className="col-12 col-sm-12 col-md-6 feature-row__item text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/home12-category-bnr1.jpg" src="assets/images/collection/home12-category-bnr1.jpg" alt="Hot hoodies jackets" title="Hot hoodies jackets" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 feature-row__item feature-row__text feature-row__text--left text-left">
                            <div className="row-text">
                                <h2 className="h2">Hot hoodies jackets</h2>
                                <p>Cover up in style with Hot Jackets now only $50</p>
                                <a href="#" className="btn">SHOP $50 Jackets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Feature Content*/}
        
        {/*Feature Content*/}
        <div className="section feature-content">
            <div className="container">
                <div className="row">
                    <div className="feature-row">
                        <div className="col-12 col-sm-12 col-md-6 feature-row__item feature-row__text feature-row__text--right text-right">
                            <div className="row-text">
                                <h2 className="h2">Shoes Collection</h2>
                                <p>Shoes we can't stop wearing!</p>
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 feature-row__item text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/home12-category-bnr2.jpg" src="assets/images/collection/home12-category-bnr2.jpg" alt="Shoes Collection" title="Shoes Collection" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*Feature Content*/}
        
       
        {/*Trendy Collection*/}
        <div className="section custom-content-style1">
        	<div className="container">
            	<div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="section-header text-center">
                            <h2 className="h2">Trendy Collection</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mb-4">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="custom-text text-center">
                            <h4 className="h3">
                                <a href="#">Warm layers, fall colors and trendy styles are here for fall!</a>   
                            </h4>
                            <div className="rte-setting"><p>UP TO 60% OFF </p></div>
                            <a className="btn" href="#">Shop Women's</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="custom-text text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/shoes-collection1.jpg" src="assets/images/collection/shoes-collection1.jpg" alt="" title=""/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="custom-text text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/shoes-collection2.jpg" src="assets/images/collection/shoes-collection2.jpg" alt="" title=""/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="custom-text text-center">
                            <img className="blur-up lazyload" data-src="assets/images/collection/shoes-collection3.jpg" src="assets/images/collection/shoes-collection3.jpg" alt="" title=""/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="custom-text text-center">
                            <h4 className="h3">
                                <a href="#">Stay warm and look cool in fall styles for guys!</a>   
                            </h4>
                            <div className="rte-setting"><p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, velit...</p></div>
                            <a className="btn" href="#">Shop Women's</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*End Trendy Collection*/}a
        
        
        
    {/*End Body Content*/}
    </div> 


    </div>
    );
}

export default Home;

