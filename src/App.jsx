import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CategoryPage from "./components/CategoryPage";
import CategoryProducts from "./components/CategoryProducts";
import Cart from "./components/Cart";

const App = () => {
    // Состояние корзины
    const [cartItems, setCartItems] = useState([]);

    // Функция добавления товара в корзину
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Функция удаления товара из корзины
    const removeFromCart = (itemId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    {/* Страница категорий */}
                    <Route path="/" element={<CategoryPage />} />

                    {/* Страница товаров для подкатегории */}
                    <Route
                        path="/categories/:categoryName"
                        element={
                            <CategoryProducts
                                addToCart={addToCart}
                            />
                        }
                    />

                    {/* Страница корзины */}
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                cartItems={cartItems}
                                removeFromCart={removeFromCart}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
