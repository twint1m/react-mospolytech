import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import { Home } from '../Components/pages/Home/Home'
import { Order } from '../Components/pages/Order/Order'
import {
	FORM_ROUTE,
	UNIVERSITY_ROUTE,
	HOME_ROUTE,
	ORDER_ROUTE,
	DOWNLOAD_ROUTE
} from './configs'
import { useAuth } from '../hooks/useAuth'
import { UniversityTable } from '../Components/pages/UniversityTable/UniversityTable'
import { Form } from '../Components/pages/Form/Form'
import PdfForm from '../Components/pages/PdfForm/PdfForm'

export const MainRouter: React.FC = () => {
	const { isAuth } = useAuth()

	const basedPath: RouteObject[] = [
		{ path: UNIVERSITY_ROUTE, element: <UniversityTable /> },
		{ path: FORM_ROUTE, element: <Form /> },
		{ path: HOME_ROUTE, element: <Home /> },
		{ path: DOWNLOAD_ROUTE, element: <PdfForm /> }
	]

	const authPath: RouteObject[] = isAuth
		? [{ path: ORDER_ROUTE, element: <Order /> }]
		: []

	const resultPaths: RouteObject[] = basedPath.concat(authPath)

	return useRoutes(resultPaths)
}
