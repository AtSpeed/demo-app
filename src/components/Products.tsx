import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <ul>
          <li><Link to="product1">Product 1</Link></li>
          <li><Link to="product2">Product 2</Link></li>
          <li><Link to="product3">Product 3</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Renders the child route components */}
    </div>
  );
};

export default Products;
