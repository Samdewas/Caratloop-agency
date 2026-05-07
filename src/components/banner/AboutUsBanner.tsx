import aboutThumb from '../../../public/assets/img/cartaloop/about1.png';
import Image from 'next/image';

const AboutUsBanner = ({ image = aboutThumb, spacingCls = "" }) => {
    return (
        <div className={`ar-banner-area ${spacingCls}`}>
            <div className="ar-banner-wrap ar-about-us-4">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" src={image} alt="about thumb" data-speed=".8" />
            </div>
        </div>
    );
};

export default AboutUsBanner;