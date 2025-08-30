
import { lazy, Suspense, type JSX } from 'react';
import type { RouteObject } from 'react-router-dom';

import MainLayout from '@/components/Layout/MainLayout';

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const ProductOptions = lazy(() => import('@/pages/Product'));

const withSuspense = (el: JSX.Element) => (
  <Suspense fallback={<div>Loading…</div>}>{el}</Suspense>
);

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { index: true, element: withSuspense(<Home />) },
      { path: '/login', element: withSuspense(<Login />) },
      { path: '/register', element: withSuspense(<Register />) },
      { path: '/product', element: withSuspense(<Register />) },
      { path: '/product/:productName', element: withSuspense(<ProductOptions />) },
    ]
  }
];
