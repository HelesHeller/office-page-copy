// src/components/CategoryItem.jsx

import { Link } from 'react-router-dom';
import './CategoryItem.css';

const CategoryItem = ({ name, image, path }) => {
    return (
        <div className="category-item">
            <Link to={`/categories/${path}`} className="category-link">
                <img src={image} alt={name} />
                <h3>{name}</h3>
            </Link>
        </div>
    );
};

export default CategoryItem;
