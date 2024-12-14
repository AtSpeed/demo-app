import React from 'react';

interface RouteType {
  path: string;
  name: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  children?: RouteType[];
}

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Products = React.lazy(() => import('./components/Products'));
const Contact = React.lazy(() => import('./components/Contact'));
const Product1 = React.lazy(() => import('./components/products/Product1'));
const Product2 = React.lazy(() => import('./components/products/Product2'));
const Product3 = React.lazy(() => import('./components/products/Product3'));
const SubProduct1 = React.lazy(() => import('./components/products/product1/SubProduct1'));
const SubProduct2 = React.lazy(() => import('./components/products/product1/SubProduct2'));

const routes: RouteType[] = [
  { path: '/', name: 'Home', element: Home },
  { path: '/about', name: 'About', element: About },
  { 
    path: '/products', 
    name: 'Products', 
    element: Products,
    children: [
      {
        path: 'product1',
        name: 'Product 1',
        element: Product1,
        children: [
          { path: 'subproduct1', name: 'Sub-Product 1', element: SubProduct1 },
          { path: 'subproduct2', name: 'Sub-Product 2', element: SubProduct2 },
        ],
      },
      { path: 'product2', name: 'Product 2', element: Product2 },
      { path: 'product3', name: 'Product 3', element: Product3 },
    ],
  },
  { path: '/contact', name: 'Contact', element: Contact },
];

export default routes;
