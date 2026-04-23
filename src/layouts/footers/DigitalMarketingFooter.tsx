import { FooterSocialIconsTwo } from './subComponents/FooterSocialIcons';
import DigitalMarketingCopyright from './subComponents/DigitalMarketingCopyright';
import logo from "../../../public/assets/img/logo/logo-white.png";
import { EmailIconTwo, SendEmailIcon, } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const DigitalMarketingFooter = ({ spacingCls = "" }) => {
    return (
        <footer className={`${spacingCls} pb-20 section-margin`}>
            <div className="dgm-footer-bg p-relative">
                {/* -- footer area start -- */}
                <div className="dgm-footer-area black-bg-5 pt-100">
                    <div className="container container-1430">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                                <div className="dgm-footer-widget dgm-footer-col-1 z-index-1 tp_fade_anim" data-delay=".3">
                                    <div className="dgm-footer-logo mb-30">
                                        <Link href="/"><Image width={120} src={logo} alt="logo-white" /></Link>
                                    </div>
                                    <div className="dgm-footer-widget-paragraph mb-35">
                                        <p>CaratLoop builds and scales premium
                                            jewelry brands with Shopify websites
                                            and performance-driven digital marketing
                                            solutions backed by industry expertise.</p>
                                    </div>
                                    {/* footer social icons */}
                                    <FooterSocialIconsTwo className='dgm-footer-widget-social' />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3  col-md-3 mb-40">
                                <div className="dgm-footer-widget dgm-footer-col-2 tp_fade_anim" data-delay=".4">
                                    <h4 className="dgm-footer-widget-title">Service</h4>
                                    <div className="dgm-footer-widget-menu">
                                        <ul>

                                            <li><Link href="#">Shopify Migration</Link></li>
                                            <li><Link href="#">Branding & UI Design</Link></li>
                                            <li><Link href="#">Page Optimization</Link></li>
                                            <li><Link href="#">Setup & Apps Integration</Link></li>
                                            <li><Link href="#">Conversion Rate Optimization</Link></li>
                                            <li><Link href="#">Marketing Setup</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-3 mb-40">
                                <div className="dgm-footer-widget dgm-footer-col-3 tp_fade_anim" data-delay=".5">
                                    <h4 className="dgm-footer-widget-title">Company</h4>
                                    <div className="dgm-footer-widget-menu">
                                        <ul>
                                            <li><Link href="#">Home</Link></li>
                                            <li><Link href="#">Agency</Link></li>
                                            <li><Link href="#">Achievement</Link></li>
                                            <li><Link href="#">Career</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                                <div className="dgm-footer-widget dgm-footer-col-4 z-index-1 tp_fade_anim" data-delay=".6">
                                    <h4 className="dgm-footer-widget-title">Location</h4>
                                    <div className="dgm-footer-widget-paragraph color-style mb-35">
                                        <p>Germany — 482 15h Street, Office 426 Berlin, De 80500</p>
                                    </div>
                                    <h4 className="dgm-footer-widget-title">Call Us on</h4>
                                    <div className="dgm-footer-widget-paragraph color-style mb-35">
                                        <p>hello@design.com</p>
                                    </div>
                                    <h4 className="dgm-footer-widget-title">(+1) 234 567 8910</h4>
                                    {/* <div className="dgm-footer-widget-input p-relative">
                                        <form action="#">
                                            <input type="text" placeholder="Enter your email" />
                                            <span className="input-icon">
                                                <EmailIconTwo />
                                            </span>
                                            <button className="input-button" type="submit">
                                                <span><SendEmailIcon /></span>
                                            </button>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* -- footer area end -- */}

                {/* -- copyright area start -- */}
                <DigitalMarketingCopyright />
                {/* -- copyright area end -- */}
            </div>
        </footer>
    );
};

export default DigitalMarketingFooter;