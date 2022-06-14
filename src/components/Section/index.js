import styles from './Section.module.scss';
import classNames from 'classnames/bind';
import { Route, Routes } from 'react-router-dom';

import Products from '~/components/Section/Products/product';
import Details from '~/components/Section/Details/detail';
import Slides from '~/components/Section/Slides/slide';
import About from '~/components/Section/About/about';
import Contact from '~/components/Section/Contacts/contact';
import Login from '~/components/Section/Logins/login';
import Cart from '~/components/Section/Carts/cart';
import Payment from '~/components/Section/Payment/payment';

const cx = classNames.bind(styles);
function Section() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <Routes>
                    <Route path="/" element={<Slides />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/product/:id" element={<Details />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </div>
        </section>
    );
}

export default Section;
