import React from 'react';

function Header(props) {
    return (
        <div>

    {/*Header*/}
    <div className="header-wrap classicHeader animated d-flex">
    	    <div className="container-fluid">        
                <div className="row align-items-center">
            	{/*Desktop Logo*/}
                <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                    <a href="/">
                    	<img src="assets/images/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" />
                    </a>
                </div>
                {/*End Desktop Logo*/}
                <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                	<div className="d-block d-lg-none">
                        <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                        	<i className="icon anm anm-times-l"></i>
                            <i className="anm anm-bars-r"></i>
                        </button>
                    </div>
                	{/*Desktop Menu*/}
                	<nav className="grid__item" id="AccessibleNav">{/* for mobile */}
                        <ul id="siteNav" className="site-nav medium center hidearrow">
                            <li className="lvl1 parent megamenu"><a href="#">Home <i className="anm anm-angle-down-l"></i></a>
                            </li>
                            <li className="lvl1 parent megamenu"><a href="#">Shop <i className="anm anm-angle-down-l"></i></a>
                            	<div className="megamenu style4">
                                    <ul className="grid grid--uniform mmWrapper">
                                    	<li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Shop Pages</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Left Sidebar</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Right Sidebar</a></li>
                                                <li className="lvl-2"><a href="shop-fullwidth.html" className="site-nav lvl-2">Fullwidth</a></li>
                                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav lvl-2">3 items per row</a></li>
                                                <li className="lvl-2"><a href="shop-grid-4.html" className="site-nav lvl-2">4 items per row</a></li>
                                                <li className="lvl-2"><a href="shop-grid-5.html" className="site-nav lvl-2">5 items per row</a></li>
                                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav lvl-2">6 items per row</a></li>
                                                <li className="lvl-2"><a href="shop-grid-7.html" className="site-nav lvl-2">7 items per row</a></li>
                                                <li className="lvl-2"><a href="shop-listview.html" className="site-nav lvl-2">Product Listview</a></li>
                                            </ul>
                                      	</li>
                                      	<li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Shop Features</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Product Countdown <span className="lbl nm_label3">Hot</span></a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Infinite Scrolling</a></li>
                                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav lvl-2">Pagination - classNameic</a></li>
                                                <li className="lvl-2"><a href="shop-grid-6.html" className="site-nav lvl-2">Pagination - Load More</a></li>
                                                <li className="lvl-2"><a href="product-labels.html" className="site-nav lvl-2">Dynamic Product Labels</a></li>
                                                <li className="lvl-2"><a href="product-swatches-style.html" className="site-nav lvl-2">Product Swatches <span className="lbl nm_label2">Sale</span></a></li>
                                                <li className="lvl-2"><a href="product-hover-info.html" className="site-nav lvl-2">Product Hover Info</a></li>
                                                <li className="lvl-2"><a href="shop-grid-3.html" className="site-nav lvl-2">Product Reviews</a></li>
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Discount Label <span className="lbl nm_label1">New</span></a></li>
                                            </ul>
                                      	</li>
                                        <li className="grid__item lvl-1 col-md-6 col-lg-6">
                                        	<a href="#"><img src="assets/images/megamenu-bg1.jpg" alt="" title="" /></a>
                                        </li>
                                    </ul>
                              	</div>
                            </li>
                        <li className="lvl1 parent megamenu"><a href="#">Product <i className="anm anm-angle-down-l"></i></a>
                        	<div className="megamenu style2">
                                <ul className="grid mmWrapper">
                                    <li className="grid__item one-whole">
                                        <ul className="grid">
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Product Page</a>
                                                <ul className="subLinks">
                                                    <li className="lvl-2"><a href="product-layout-1.html" className="site-nav lvl-2">Product Layout 1</a></li>
                                                    <li className="lvl-2"><a href="product-layout-2.html" className="site-nav lvl-2">Product Layout 2</a></li>
                                                    <li className="lvl-2"><a href="product-layout-3.html" className="site-nav lvl-2">Product Layout 3</a></li>
                                                    <li className="lvl-2"><a href="product-with-left-thumbs.html" className="site-nav lvl-2">Product With Left Thumbs</a></li>
                                                    <li className="lvl-2"><a href="product-with-right-thumbs.html" className="site-nav lvl-2">Product With Right Thumbs</a></li>
                                                    <li className="lvl-2"><a href="product-with-bottom-thumbs.html" className="site-nav lvl-2">Product With Bottom Thumbs</a></li>
                                                </ul>
                                            </li>
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Product Features</a>
                                                <ul className="subLinks">
                                                  <li className="lvl-2"><a href="short-description.html" className="site-nav lvl-2">Short Description</a></li>
                                                  <li className="lvl-2"><a href="product-countdown.html" className="site-nav lvl-2">Product Countdown</a></li>
                                                  <li className="lvl-2"><a href="product-video.html" className="site-nav lvl-2">Product Video</a></li>
                                                  <li className="lvl-2"><a href="product-quantity-message.html" className="site-nav lvl-2">Product Quantity Message</a></li>
                                                  <li className="lvl-2"><a href="product-visitor-sold-count.html" className="site-nav lvl-2">Product Visitor/Sold Count <span className="lbl nm_label3">Hot</span></a></li>
                                                  <li className="lvl-2"><a href="product-zoom-lightbox.html" className="site-nav lvl-2">Product Zoom/Lightbox <span className="lbl nm_label1">New</span></a></li>
                                                </ul>
                                              </li>
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Product Features</a>
                                                    <ul className="subLinks">
                                                      <li className="lvl-2"><a href="product-with-variant-image.html" className="site-nav lvl-2">Product with Variant Image</a></li>
                                                      <li className="lvl-2"><a href="product-with-color-swatch.html" className="site-nav lvl-2">Product with Color Swatch</a></li>
                                                      <li className="lvl-2"><a href="product-with-image-swatch.html" className="site-nav lvl-2">Product with Image Swatch</a></li>
                                                      <li className="lvl-2"><a href="product-with-dropdown.html" className="site-nav lvl-2">Product with Dropdown</a></li>
                                                      <li className="lvl-2"><a href="product-with-rounded-square.html" className="site-nav lvl-2">Product with Rounded Square</a></li>
                                                      <li className="lvl-2"><a href="swatches-style.html" className="site-nav lvl-2">Product Swatches All Style</a></li>
                                                    </ul>
                                                </li>
                                                <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1">Product Features</a>
                                                    <ul className="subLinks">
                                                      <li className="lvl-2"><a href="product-accordion.html" className="site-nav lvl-2">Product Accordion</a></li>
                                                      <li className="lvl-2"><a href="product-pre-orders.html" className="site-nav lvl-2">Product Pre-orders <span className="lbl nm_label1">New</span></a></li>
                                                      <li className="lvl-2"><a href="product-labels-detail.html" className="site-nav lvl-2">Product Labels</a></li>
                                                      <li className="lvl-2"><a href="product-discount.html" className="site-nav lvl-2">Product Discount In %</a></li>
                                                      <li className="lvl-2"><a href="product-shipping-message.html" className="site-nav lvl-2">Product Shipping Message</a></li>
                                                      <li className="lvl-2"><a href="size-guide.html" className="site-nav lvl-2">Size Guide <span className="lbl nm_label1">New</span></a></li>
                                                    </ul>
                                                </li>
                                        </ul>
                                    </li>
                                  	<li className="grid__item large-up--one-whole imageCol"><a href="#"><img src="assets/images/megamenu-bg2.jpg" alt=""/></a></li>
                                </ul>
                          	</div>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">Pages <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                          	<li><a href="cart-variant1.html" className="site-nav">Cart Page <i className="anm anm-angle-right-l"></i></a>
                                <ul className="dropdown">
                                    <li><a href="cart-variant1.html" className="site-nav">Cart Variant1</a></li>
                                    <li><a href="cart-variant2.html" className="site-nav">Cart Variant2</a></li>
                                 </ul>
                            </li>
                            <li><a href="compare-variant1.html" className="site-nav">Compare Product <i className="anm anm-angle-right-l"></i></a>
                                <ul className="dropdown">
                                    <li><a href="compare-variant1.html" className="site-nav">Compare Variant1</a></li>
                                    <li><a href="compare-variant2.html" className="site-nav">Compare Variant2</a></li>
                                 </ul>
                            </li>
							<li><a href="checkout.html" className="site-nav">Checkout</a></li>
                            <li><a href="about-us.html" className="site-nav">About Us <span className="lbl nm_label1">New</span> </a></li>
                            <li><a href="contact-us.html" className="site-nav">Contact Us</a></li>
                            <li><a href="faqs.html" className="site-nav">FAQs</a></li>
                            <li><a href="lookbook1.html" className="site-nav">Lookbook<i className="anm anm-angle-right-l"></i></a>
                              <ul>
                                <li><a href="lookbook1.html" className="site-nav">Style 1</a></li>
                                <li><a href="lookbook2.html" className="site-nav">Style 2</a></li>
                              </ul>
                            </li>
                            <li><a href="404.html" className="site-nav">404</a></li>
                            <li><a href="coming-soon.html" className="site-nav">Coming soon <span className="lbl nm_label1">New</span> </a></li>
                          </ul>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">Blog <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                            <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                            <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
                            <li><a href="blog-grid-view.html" className="site-nav">Gridview</a></li>
                            <li><a href="blog-article.html" className="site-nav">Article</a></li>
                          </ul>
                        </li>
                        <li className="lvl1"><a href="#"><b>Buy Now!</b> <i className="anm anm-angle-down-l"></i></a></li>
                      </ul>
                    </nav>
                    {/*End Desktop Menu*/}
                </div>
                {/*Mobile Logo*/}
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                	<div className="logo">
                        <a href="index.html">
                            <img src="assets/images/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" />
                        </a>
                    </div>
                </div>
                {/*Mobile Logo*/}
                <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                	<div className="site-cart">
                    	<a href="#" className="site-header__cart" title="Cart">
                        	<i className="icon anm anm-bag-l"></i>
                            <span id="CartCount" className="site-header__cart-count" data-cart-render="item_count">2</span>
                        </a>
                        {/*Minicart Popup*/}
                        <div id="header-cart" className="block block-cart">
                        	<ul className="mini-products-list">
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
                                        <div className="variant-cart">Black / XL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" defaultValue="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="priceRow">
                                        	<div className="product-price">
                                            	<span className="money">$59.00</span>
                                            </div>
                                         </div>
									</div>
                                </li>
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="assets/images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Elastic Waist Dress</a>
                                        <div className="variant-cart">Gray / XXL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" defaultValue="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                       	<div className="priceRow">
                                            <div className="product-price">
                                                <span className="money">$99.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total">
                            	<div className="total-in">
                                	<span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">$748.00</span></span>
                                </div>
                                 <div className="buttonSet text-center">
                                    <a href="cart.html" className="btn btn-secondary btn--small">View Cart</a>
                                    <a href="checkout.html" className="btn btn-secondary btn--small">Checkout</a>
                                </div>
                            </div>
                        </div>
                        {/*End Minicart Popup*/}
                    </div>
                    <div className="site-header__search">
                    	<button type="button" className="search-trigger"><i className="icon anm anm-search-l"></i></button>
                    </div>
                    {/*Search Form Drawer*/}
	<div class="search">
        <div class="search__form">
            <form class="search-bar__form" action="#">
                <button class="go-btn search__button" type="submit"><i class="icon anm anm-search-l"></i></button>
                <input class="search__input" type="search" name="q" value="" placeholder="Search entire store..." aria-label="Search" autoComplete="off"/>
            </form>
            <button type="button" class="search-trigger close-btn"><i class="anm anm-times-l"></i></button>
        </div>
    </div>
    {/*End Search Form Drawer*/}
                </div>
        	</div>
        </div>
    </div>
    {/*End Header*/}  
        </div>
    );
}

export default Header;