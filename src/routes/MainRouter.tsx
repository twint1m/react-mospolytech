import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'
import NotFound from '../components/pages/NotFound'

export const MainRouter: React.FC = () => {
	const { isAuth } = useAuth()

	return (
		<Routes>
			{routes.map(route => {
				if (route.isAuth && !isAuth) {
					return false
				}
				return (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				)
			})}
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
// TODO: Добавить отслеживание состояния ссылок при авторизации
