// src/components/CategoryProducts.jsx

import { useParams } from 'react-router-dom';
import "./CategoryProducts.css";

const productsData = {
    "office-chairs": [
        { id: 1, name: "Офісне крісло 1", price: 2000, image: "/images/products/office-chair1.jpg" },
        { id: 2, name: "Офісне крісло 2", price: 2500, image: "/images/products/office-chair2.jpg" },
    ],
    "gaming-chairs": [
        { id: 3, name: "Геймерське крісло 1", price: 3000, image: "/images/products/gaming-chair1.jpg" },
        { id: 4, name: "Геймерське крісло 2", price: 3500, image: "/images/products/gaming-chair2.jpg" },
    ],
    "computer-desk": [
        { id: 5, name: "Комп'ютерний стіл 1", price: 4000, image: "/images/products/computer-desk1.jpg" },
    ],
    "adjustable-desk": [
        { id: 6, name: "Стіл з регулюванням висоти 1", price: 4500, image: "/images/products/adjustable-desk1.jpg" },
    ],
    "office-accessories": [
        { id: 7, name: "Аксесуар для офісу 1", price: 500, image: "/images/products/office-accessory1.jpg" },
    ],
    "bookcases": [
        { id: 8, name: "Книжкова шафа 1", price: 6000, image: "/images/products/bookcase1.jpg" },
    ],
    "shelves": [
        { id: 9, name: "Полиця 1", price: 1500, image: "/images/products/shelf1.jpg" },
    ],
};

const CategoryProducts = ({ addToCart }) => {
    const { categoryName } = useParams();
    const products = productsData[categoryName] || [];

    return (
        <div className="category-products-page">
            <h2>Товары для категории: {categoryName}</h2>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price} грн</p>
                        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
