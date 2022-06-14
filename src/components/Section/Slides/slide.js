import './Slide.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slides() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="section-specialty">
            <div className="content">
                <Slider {...settings}>
                    <div className="img-customize">
                        <h3>Home</h3>
                    </div>
                    <div className="img-customize">
                        <h3>Product</h3>
                    </div>
                    <div className="img-customize">
                        <h3>Contact</h3>
                    </div>
                    <div className="img-customize">
                        <h3>About us</h3>
                    </div>
                    <div className="img-customize">
                        <h3>Login</h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Slides;
