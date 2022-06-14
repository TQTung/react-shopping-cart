import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './Details.module.scss';
import classNames from 'classnames/bind';

import { Context } from '~/components/Context/context';
import Colors from '~/components/Section/Details/Colors/color';

const cx = classNames.bind(styles);

function Details() {
    const [products, setProducts] = useState([]);
    const items = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const data = items.products.filter((item) => item.id === id);
            setProducts(data);
        }
    }, [items, id]);

    return (
        <>
            {products.map((product) => (
                <div className={cx('details-inner')} key={product.id}>
                    <img src={product.src} alt={`img-${product.id}`} className={cx('img')} />
                    <div className={cx('box')}>
                        <div className={cx('row')}>
                            <h2 className={cx('title')}>{product.title}</h2>
                            <span className={cx('price')}>$ {product.price}</span>
                        </div>
                        <Colors colors={product.colors} />
                        <p className={cx('des')}>{product.description}</p>
                        <p className={cx('content')}>{product.content}</p>
                        <Link to="/cart" className={cx('btn-cart')} onClick={() => items.handleAddCart(product.id)}>
                            Add to cart
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Details;
