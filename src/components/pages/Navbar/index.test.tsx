import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './index'
import { useAuth } from '../../../hooks/useAuth'
import { useCurrentTheme } from '../../../hooks/useCurrentTheme'
import { BrowserRouter } from 'react-router-dom'

vi.mock('../../../hooks/useAuth')
const mockedUseAuth = useAuth as jest.Mock

vi.mock('../../../hooks/useCurrentTheme')
const mockedUseCurrentTheme = useCurrentTheme as jest.Mock

describe('Компонент навигации', () => {
	it('Проверка кнопки Войти на правильность состояния isAuth (false)', () => {
		mockedUseAuth.mockReturnValue({ isAuth: false, handleClick: vi.fn() })
		mockedUseCurrentTheme.mockReturnValue({ changeTheme: vi.fn() })

		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		)

		const loginButton = screen.getByTestId('login-button')
		expect(loginButton).toHaveTextContent('Войти')
	})

	it('Проверка кнопки Войти на правильность состояния isAuth (true)', () => {
		mockedUseAuth.mockReturnValue({ isAuth: true, handleClick: vi.fn() })
		mockedUseCurrentTheme.mockReturnValue({ changeTheme: vi.fn() })

		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		)

		const logoutButton = screen.getByTestId('login-button')
		expect(logoutButton).toHaveTextContent('Выйти')
	})

	it('Вызов функции handleClick при клике на кнопку', () => {
		const handleClickMock = vi.fn()
		mockedUseAuth.mockReturnValue({
			isAuth: false,
			handleClick: handleClickMock
		})
		mockedUseCurrentTheme.mockReturnValue({ changeTheme: vi.fn() })

		render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		)

		const loginButton = screen.getByTestId('login-button')
		fireEvent.click(loginButton)
		expect(handleClickMock).toHaveBeenCalled()
	})
})
