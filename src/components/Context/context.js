import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Context = createContext();
function Provider({ children }) {
    const [products, setProducts] = useState([]);
    const [addCart, setAddCart] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleAddCart = (id) => {
        const check = addCart.every((item) => item.id !== id);
        if (check) {
            const data = products.filter((product) => product.id === id);
            setAddCart([...data, ...addCart]);
        } else {
            alert('The product has been added to cart !');
        }
    };

    const handleReduce = (id) => {
        addCart.forEach((item) => {
            if (item.id === id) {
                item.count === 1 ? (item.count = 1) : (item.count -= 1);
            }
        });
        setAddCart([...addCart]);
    };
    const handleIncrease = (id) => {
        addCart.forEach((item) => {
            if (item.id === id) {
                item.count += 1;
            }
        });
        setAddCart([...addCart]);
    };
    const handleRemoveProduct = (id) => {
        if (window.confirm('Are you sure you want to remove this product?')) {
            addCart.forEach((item, index) => {
                if (item.id === id) {
                    addCart.splice(index, 1);
                }
            });
            setAddCart([...addCart]);
        }
    };

    return (
        <>
            <Context.Provider
                value={{
                    products,
                    handleAddCart,
                    addCart,
                    handleReduce,
                    handleIncrease,
                    handleRemoveProduct,
                }}
            >
                {children}
            </Context.Provider>
            ;
        </>
    );
}

export default Provider;
