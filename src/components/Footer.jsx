import React from 'react'
import "../style/footer.css";
import twitter from '../img/footer/twitterimg.png'
import fb from '../img/footer/fbimg.png'
import linkedin from '../img/footer/linkedinimg.png'
import insta from '../img/footer/instaimg.png'

const Footer =()=>{
    return(
        <div className='footer'>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>

                    <div className='sb_footer-links_div'>
                        <h4>Product Categories</h4>

                        <a href='#'>
                            <p>Consumer</p>
                        </a>

                        <a href='#'>
                            <p>Professional</p>
                        </a>

                        <a href='#'>
                            <p>Enterprise</p>
                        </a>

                        <a href='#'>
                            <p>Components</p>
                        </a>

                    </div>






                    
                    <div className='sb_footer-links_div'>
                            <h4>Where to Buy</h4>

                            <a href='#'>
                                <p>Online Store</p>
                            </a>

                            <a href='#'>
                                <p>Retail Stores</p>
                            </a>

                            <a href='#'>
                                <p>Enterprise Retailers</p>
                            </a>


                            <a href='#'>
                                <p>Pro Retailers</p>
                            </a>

                            <a href='#'>
                                <p>Operated Stores</p>
                            </a>


                    </div>




                    <div className='sb_footer-links_div'>
                        <h4>Support</h4>

                        <a href='#'>
                            <p>Product Support</p>
                        </a>


                        <a href='#'>
                            <p>Service Request and Inquiry</p>
                        </a>


                        <a href='#'>
                            <p>Help Center</p>
                        </a>


                        <a href='#'>
                            <p>After-Sales Service Policies</p>
                        </a>

                        <a href='#'>
                            <p>Download Center</p>
                        </a>


                    </div>




                    <div className='sb_footer-links_div'>
                        <h4>Explore</h4>

                        <a href='#'>
                            <p>Newsroom</p>
                        </a>

                        <a href='#'>
                            <p>Buying Guides</p>
                        </a>

                        <a href='#'>
                            <p>STEAM Education</p>
                        </a>

                        <a href='#'>
                            <p>Press</p>
                        </a>

                    </div>




                    <div className='sb_footer-links_div'>
                        <h4>Coming soon on </h4>

                        <div className='socialmedia'>
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>

                    </div>


                    

                </div>




                <hr></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()} Byteproc. All right reserved.
                        </p>
                    </div>

                    <div className='sb_footer-below-links'>
                        <a href="/terms"><div><p>Terms & Condition</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Footer;
