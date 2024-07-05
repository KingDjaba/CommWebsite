import React from 'react';

function Footer(props) {
    return (
    <div>
    {/*Footer*/}
    <footer id="footer" className="footer-4">
        <div className="newsletter-section">
            <div className="container">
                <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 w-100 d-flex justify-content-start align-items-center">
                            <div className="display-table">
                                <div className="display-table-cell footer-newsletter">
                                    <div className="section-header text-center">
                                        <label className="h2"><span>sign up for </span>newsletter</label>
                                    </div>
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <input type="email" className="input-group__field newsletter__input" name="EMAIL" value="" placeholder="Email address" required=""/>
                                            <span className="input-group__btn">
                                                <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Subscribe</span></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 d-flex justify-content-end align-items-center">
                            <div className="footer-social">
                                <ul className="list--inline site-footer__social-icons social-icons">
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook"></i></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter"></i> <span className="icon__fallback-text">Twitter</span></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i className="icon icon-pinterest"></i> <span className="icon__fallback-text">Pinterest</span></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram"></i> <span className="icon__fallback-text">Instagram</span></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i className="icon icon-tumblr-alt"></i> <span className="icon__fallback-text">Tumblr</span></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i className="icon icon-youtube"></i> <span className="icon__fallback-text">YouTube</span></a></li>
                                    <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i className="icon icon-vimeo-alt"></i> <span className="icon__fallback-text">Vimeo</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>    
        </div>
        <div className="site-footer">
            <div className="container">
                {/*Footer Links*/}
                <div className="footer-top">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Quick Shop</h4>
                            <ul>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Sportswear</a></li>
                                <li><a href="#">Sale</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Informations</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Terms &amp; condition</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Customer Services</h4>
                            <ul>
                                <li><a href="#">Request Personal Data</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Orders and Returns</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                            <h4 className="h4">Pages</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Lookbook</a></li>
                                <li><a href="#">404</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*End Footer Links*/}
                <hr/>
                <div className="footer-bottom">
                    <div className="row">
                        {/*Footer Copyright*/}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 copyright text-center"><span></span> <a href="templateshub.net">Templates Hub</a></div>
                        {/*End Footer Copyright*/}
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/*End Footer*/} 
    </div>
    );
}

export default Footer;