
import DigitalMarketingServiceItem from "./subComponents/DigitalMarketingServiceItem";
import { ServiceShapeIcon } from "@/svg/ServiesIcons";
import servicesData from "@/data/serviceData";
import Link from "next/link";
import { ArrowFour } from "@/svg";

const DigitalMarketingService = () => {

    return (
        <div className="dgm-service-area dgm-service-radius pt-120 black-bg-5 z-index-1 section-margin">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="dgm-service-title-box z-index-1 mb-60">
                            <span className="tp-section-subtitle subtitle-grey mb-15 text-white tp_fade_anim" data-delay=".3">Services</span>
                            <h4 className="tp-section-title-grotesk text-white tp_fade_anim" data-delay=".5">
                                Complete Services for Jewelry Brand&nbsp;
                                <span className="p-relative">
                                    Success
                                    <span className="tp-section-title-shape">
                                        <ServiceShapeIcon />
                                    </span>
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-5 dgmm-service-btn">
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
                <div className="dgm-service-wrap">
                    <div className="row">
                        <div className="col-xl-12">
                            {servicesData.slice(0, 7).map((service) => (
                                <DigitalMarketingServiceItem key={service.id} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingService;