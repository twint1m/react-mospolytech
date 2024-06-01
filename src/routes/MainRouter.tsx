import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
// @ts-ignore
import { routes } from './routes.data'
import NotFound from '../components/pages/NotFound'
import React from 'react'

export const MainRouter: React.FC = () => {
	const { isAuth } = useAuth()
	const renderedRoutes = routes.map(route => {
		if (route.isAuth && !isAuth) {
			return null
		}
		return (
			<Route key={route.path} path={route.path} element={<route.component />} />
		)
	})

	return (
		<Routes>
			{renderedRoutes}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

// TODO: Добавить отслеживание состояния ссылок при авторизации?????
