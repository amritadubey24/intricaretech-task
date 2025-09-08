import React from "react";
import { Link } from "react-router-dom";
import whiteLogo1 from "../assets/images/logo.webp";
import chromeIcon from "../assets/images/icons/chrome-icon.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pmd_footer--wrapper">
            <div className="container">
                <div className="pmd_footer--inner">
                    <div className="pmd_footerLinks">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="pmd_footerBlock">
                                    <div className="pmd_footerlogo">
                                        <Link to="/">
                                            <img src={whiteLogo1} alt="ICCOC White Logo" className="img-fluid" />
                                        </Link>
                                    </div>
                                    <p className="footerCon">LeadCRM is LinkedIn integration  tool for your CRM.</p>
                                    {/* footer social icons here  */}
                                    <div className="icc-footerBlock primaryBlock">
                                        <div className="footer_socialLinks">
                                            <ul>
                                                <li><Link to="/"><span className="pmd_footerIcon facebook" target="_blank"></span></Link></li>
                                                <li><Link to="/"><span className="pmd_footerIcon twitter" target="_blank"></span></Link></li>
                                                <li><Link to="https://in.linkedin.com/in/amrita-dubey-43b4ba1ab"><span className="pmd_footerIcon linkedin"></span></Link></li>
                                                <li><Link to="/"><span className="pmd_footerIcon insta" target="_blank"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3">
                                <div class="pmd_footerBlock">
                                    <h5>Integrations</h5>
                                    <ul>
                                        <li><Link>HubSpot</Link></li>
                                        <li><Link>Salesforce</Link></li>
                                        <li><Link>Pipedrive</Link></li>
                                        <li><Link>Close.io</Link></li>
                                        <li><Link>Insightly</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3">
                                <div class="pmd_footerBlock">
                                    <h5>Alternative</h5>
                                    <ul>
                                        <li><Link>Surfe VS LeadCRM</Link></li>
                                        <li><Link>Linkmatch Alternative</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3">
                                <div class="pmd_footerBlock">
                                    <h5>Legal</h5>
                                    <ul>
                                        <li><Link>Privacy Policy</Link></li>
                                        <li><Link>Terms of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="pmd_footerBlock">
                                    <h5>Contact Us</h5>
                                    <ul>
                                        <li><span className="mailIcon"></span><Link> support@leadcrm.io</Link></li>
                                        <li><span className="phoneIcon"></span><Link> +1 231-538-7466</Link></li>
                                        <li><span className="helpIcon"></span> <Link>Help Center</Link></li>
                                        <li><span className="affIcon"> </span><Link>  Affiliate Program</Link></li>
                                        <li>
                                            <div className="chAv">
                                                <div className="chCont">
                                                    <h4> Available in </h4>
                                                    <p>Chrome</p>
                                                </div>
                                                <div className="chIcon">
                                                    <img src={chromeIcon} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="des">Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pmd_footerBottom--strip">
                    <p>Copyright<span>© {currentYear} LeadCRM.</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
