import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {
	FORM_ROUTE,
	UNIVERSITY_ROUTE,
	HOME_ROUTE,
	ORDER_ROUTE,
	DOWNLOAD_ROUTE
} from '../../../Routes/configs'
import { useAuth } from '../../../hooks/useAuth'
import { useCurrentTheme } from '../../../hooks/useCurrentTheme'
import {
	Button,
	ChangeThemeButton,
	Navigation,
	NavigationHeader
} from './Navbar.styled'
import { ChangeThemeIcon } from '../../icons/ChangeThemeIcon'

export const Navbar: React.FC = () => {
	const { isAuth, handleLogin, handleLogout } = useAuth()
	const { changeTheme } = useCurrentTheme()

	return (
		<NavigationHeader>
			<Navigation displayFlex='flex'>
				<NavLink className={'link'} to={HOME_ROUTE}>
					Главная
				</NavLink>
				<NavLink className={'link'} to={UNIVERSITY_ROUTE}>
					Универститеты
				</NavLink>
				<NavLink className={'link'} to={FORM_ROUTE}>
					Форма
				</NavLink>
				<NavLink className={'link'} to={DOWNLOAD_ROUTE}>
					PDF
				</NavLink>
				{isAuth && (
					<NavLink className={'link'} to={ORDER_ROUTE}>
						Заказы
					</NavLink>
				)}
				<Button onClick={isAuth ? handleLogout : handleLogin}>
					{!isAuth ? 'Войти' : 'Выйти'}
				</Button>
				<ChangeThemeButton onClick={() => changeTheme()}>
					<ChangeThemeIcon />
				</ChangeThemeButton>
			</Navigation>
		</NavigationHeader>
	)
}
