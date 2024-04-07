import { NavLink } from 'react-router-dom'
import { useCurrentTheme } from '../../../hooks/useCurrentTheme'
import { ChangeThemeButton, Navigation, NavigationHeader } from './styles'
import { Button } from '../../ui/Button'
import { ChangeThemeIcon } from '../../icons/ChangeThemeIcon'
import { routes } from '../../../routes/routes.data'
import { useAuth } from '../../../hooks/useAuth'

export const Navbar: React.FC = () => {
	const { isAuth, handleClick } = useAuth()
	const { changeTheme } = useCurrentTheme()

	return (
		<NavigationHeader>
			<Navigation displayFlex='flex'>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						!route.isAuth && (
							<NavLink key={route.path} className={'link'} to={route.path}>
								{route.name}
							</NavLink>
						)
					)
				})}
				<Button
					onClick={() => {
						handleClick()
					}}
				>
					{!isAuth ? 'Войти' : 'Выйти'}
				</Button>
				<ChangeThemeButton
					onClick={() => {
						changeTheme()
					}}
				>
					<ChangeThemeIcon />
				</ChangeThemeButton>
			</Navigation>
		</NavigationHeader>
	)
}
