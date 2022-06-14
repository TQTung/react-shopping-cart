import { Context } from '~/components/Context/context';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from '../Details/Details.module.scss';
import Colors from '~/components/Section/Details/Colors/color';
import './Cart.scss';

const cx = classNames.bind(styles);

function Cart() {
    const items = useContext(Context);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getTotal = () => {
            const result = items.addCart.reduce((acc, item) => {
                return acc + item.price * item.count;
            }, 0);
            setTotal(result);
        };
        getTotal();
    }, [items.addCart]);

    if (items.addCart.length === 0) {
        return <h2 className="no-product">Nothing products</h2>;
    } else {
        return (
            <>
                {items.addCart.map((product) => (
                    <div className={cx('details-inner')} key={product.id}>
                        <img src={product.src} alt={`img-${product.id}`} className={cx('img')} />
                        <div className={cx('box')}>
                            <div className={cx('row')}>
                                <h2 className={cx('title')}>{product.title}</h2>
                                <span className={cx('price')}>$ {product.price * product.count}</span>
                            </div>
                            <Colors colors={product.colors} />
                            <p className={cx('des')}>{product.description}</p>
                            <p className={cx('content')}>{product.content}</p>
                            <div className="amount">
                                <button className="count" onClick={() => items.handleReduce(product.id)}>
                                    -
                                </button>
                                <span>{product.count}</span>
                                <button className="count" onClick={() => items.handleIncrease(product.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="delete" onClick={() => items.handleRemoveProduct(product.id)}>
                            X
                        </div>
                    </div>
                ))}
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h3>
                        Total:<span> {total} </span>$
                    </h3>
                </div>
            </>
        );
    }
}

export default Cart;
