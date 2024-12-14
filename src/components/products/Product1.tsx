import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product1: React.FC = () => (
  <div>
    <h2>Product 1</h2>
    <p>Details about Product 1.</p>
    <nav>
      <ul>
        <li><Link to="subproduct1">Sub-Product 1</Link></li>
        <li><Link to="subproduct2">Sub-Product 2</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default Product1;