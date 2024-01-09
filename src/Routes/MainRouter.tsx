import React  from 'react'
import { RouteObject, useRoutes } from "react-router-dom";
import { Home } from '../Components/pages/Home';
import { Order } from '../Components/pages/Order';
import { FORM_ROUTE, UNIVERSITY_ROUTE, HOME_ROUTE, ORDER_ROUTE } from './configs';
import { useAuth } from '../hooks/useAuth';
import { UniversityTable } from '../Components/pages/UniversityTable';
import { Form } from '../Components/pages/Form';

export const MainRouter: React.FC = () => {
  const { isAuth } = useAuth();
  
  const basedPath: RouteObject[] = [
    { path: UNIVERSITY_ROUTE, element: <UniversityTable /> },
    { path: FORM_ROUTE, element: <Form /> },
    { path: HOME_ROUTE, element: <Home/> },
  ];

  const authPath: RouteObject[] = isAuth
    ? [{ path: ORDER_ROUTE, element: <Order /> }]
    : [];

  const resultPaths: RouteObject[] = basedPath.concat(authPath);
  
  return useRoutes(resultPaths);
};

