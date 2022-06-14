import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import FacebookIcon from '~/components/Svgs/facebook-brands.svg';
import InstagramIcon from '~/components/Svgs/instagram-brands.svg';
import YoutubeIcon from '~/components/Svgs/youtube-brands.svg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('footer-logo')}>
                    <p className={cx('logo')}>Shoes</p>
                    <span className={cx('footer-title')}>
                        Dich vu ban giay cao cap , uy tin den khach hang , mang den trai nghiem tuyet voi khi mua hang
                        tai shop.
                    </span>
                    <div className={cx('social')}>
                        <div className={cx('facebook')}>
                            <a href="https://www.facebook.com/profile.php?id=100008448973753" target="blank">
                                <img src={FacebookIcon} alt="Facebook" />
                            </a>
                        </div>
                        <div className={cx('instagram')}>
                            <a href="https://www.facebook.com/profile.php?id=100008448973753" target="blank">
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                        </div>
                        <div className={cx('youtube')}>
                            <a href="https://www.facebook.com/profile.php?id=100008448973753" target="blank">
                                <img src={YoutubeIcon} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={cx('footer-link')}>
                    <h2 className={cx('title')}>Thông Tin</h2>
                    <div className={cx('info')}>
                        <div className={cx('info-link')}>
                            <Link to="/">Trang chủ</Link>
                        </div>
                        <div className={cx('info-link')}>
                            <Link to="/product">Sản phẩm</Link>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-link')}>
                            <Link to="/about">Tin tức</Link>
                        </div>
                        <div className={cx('info-link')}>
                            <Link to="/login">Đăng kí</Link>
                        </div>
                    </div>
                </div>
                <div className={cx('support')}>
                    <h2 className={cx('title')}>Hỗ Trợ</h2>
                    <div className={cx('info')}>
                        <div className={cx('info-link')}>
                            <Link to="/">Chính sách bảo mật</Link>
                        </div>
                        <div className={cx('info-link')}>
                            <Link to="/">Điều khoản & dịch vụ</Link>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <div className={cx('info-link')}>
                            <Link to="/">Chính sách giá</Link>
                        </div>
                        <div className={cx('info-link')}>
                            <Link to="/">Hỗ trợ khách hàng</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-end')}>
                <span>Shoes</span> @2022
            </div>
        </footer>
    );
}

export default Footer;
