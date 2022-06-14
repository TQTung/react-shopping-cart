import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { Context } from '~/components/Context/context';
import MenuIcon from '../Svgs/bars-solid.svg';
import CartIcon from '../Svgs/cart-shopping-solid.svg';
import CloseIcon from '../Svgs/xmark-solid.svg';

const cx = classNames.bind(styles);

function Header() {
    const data = useContext(Context);
    const cartId = data.addCart;
    const [menu, setMenu] = useState(false);

    const handleOpenMenu = () => {
        setMenu(!menu);
    };
    const handleCloseMenu = () => {
        setMenu(false);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu')} onClick={handleOpenMenu}>
                    <img src={MenuIcon} alt="bars" className={cx('menu-icon')} />
                </div>
                <div className={cx('logo')}>
                    <h1>
                        <Link to="/">Shoes</Link>
                    </h1>
                </div>
                <nav className={cx('navigation')}>
                    <ul className={menu ? cx('toggle') : ''}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/product">Product</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className={cx('close')} onClick={handleCloseMenu}>
                            <img src={CloseIcon} alt="closeIcon" className={cx('close-icon')} />
                        </li>
                    </ul>
                    <div className={cx('nav-cart')}>
                        <span>{cartId.length < 10 && cartId.length > 0 ? `0${cartId.length}` : cartId.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="cartIcon" className={cx('cart-icon')} />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
