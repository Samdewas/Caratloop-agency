import Link from 'next/link'
import React from 'react'

function DigitalMarketingCallToAction() {
    return (
        <div className='dgm-call-to-action radius-20 pt-80 pb-80 black-bg-5 z-index-1 text-center section-margin'>
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-12">
                        <h4 className='tp-section-title-grotesk text-white tp_fade_anim'>
                            Ready to grow with Carat Loop? <br/>
                            Connect with us for a consultation.
                        </h4>
                        <p className='f-size-20 text-white mb-30 mt-20'>Whether it’s a new collection launch or a complete brand glow-up, <br/>
                            we help your jewelry stand out and sell better.</p>
                        <div className="tp_fade_anim" data-delay=".5">
                            <Link className="tp-btn-yellow-green green-solid white-btn-color_border" href="/about-us-light">
                                <span>
                                    <span className="text-1">See all services</span>
                                    <span className="text-2">See all services</span>
                                </span>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketingCallToAction