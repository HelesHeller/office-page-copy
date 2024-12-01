

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryPage from './components/CategoryPage';
import CategoryProducts from './components/CategoryProducts';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<CategoryPage />} />
                    <Route path="/categories/:categoryName" element={<CategoryProducts />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
