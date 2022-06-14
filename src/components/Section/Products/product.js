import { useContext } from 'react';
import { Context } from '~/components/Context/context';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    const data = useContext(Context);

    return (
        <div className={cx('wrapper')}>
            {data.products.map((product) => (
                <div className={cx('container')} key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.src} alt="shoes" className={cx('shoes-img')} />
                    </Link>
                    <div className={cx('content')}>
                        <h3 className={cx('shoes-title')}>
                            <Link to={`/product/${product.id}`}>{product.title}</Link>
                        </h3>
                        <span className={cx('price')}>$ {product.price}</span>
                        <p className={cx('des')}>{product.description}</p>
                        <button className={cx('btn')} onClick={() => data.handleAddCart(product.id)}>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
