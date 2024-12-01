import { Link } from 'react-router-dom';
import './CategoryPage.css';

const categories = [
    { name: "Офісні крісла", path: "office-chairs", image: "/assets/image/categories/office-chairs.jpg" },
    { name: "Геймерські крісла", path: "gaming-chairs", image: "/assets/image/categories/gaming-chairs.jpg" },
    { name: "Стіл комп'ютерний", path: "computer-desk", image: "/assets/image/categories/computer-desk.jpg" },
    { name: "Столи з регулюванням висоти", path: "height-adjustable-desks", image: "/assets/image/categories/height-adjustable-desks.jpg" },
    { name: "Аксесуари для офісу", path: "office-accessories", image: "/assets/image/categories/office-accessories.jpg" },
    { name: "Книжкові шафи та перегородки", path: "bookshelves", image: "/assets/image/categories/bookshelves.jpg" },
    { name: "Полиці", path: "shelves", image: "/assets/image/categories/shelves.jpg" },
];

const CategoryPage = () => {
    return (
        <div className="category-page">
            <h2>Офисные товары и подкатегории</h2>
            <div className="categories">
                {categories.map((category) => (
                    <Link key={category.path} to={`/categories/${category.path}`} className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </Link>
                ))}
            </div>
            <Link to="/cart" className="cart-button">
                Перейти в корзину
            </Link>
        </div>
    );
};

export default CategoryPage;
