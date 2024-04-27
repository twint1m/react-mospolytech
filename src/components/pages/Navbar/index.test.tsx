// import { describe, it, expect } from 'vitest'
// import { render, screen, userEvent } from '../../../tests'
// import { Navbar } from './index'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { useAuth } from '../../../hooks/useAuth'
//
// jest.mock('../../../hooks/useAuth')
//
// describe('Navbar', async () => {
// 	it('check auth state', async () => {
// 		const handleClick = jest.fn()
// 		;(useAuth as jest.Mock).mockImplementation(() => ({
// 			isAuth: false,
// 			handleClick
// 		}))
//
// 		render(
// 			<Router>
// 				<Navbar />
// 			</Router>
// 		)
//
// 		const loginButton = screen.getByTestId('login-button')
// 		await userEvent.click(loginButton)
//
// 		expect(handleClick).toHaveBeenCalled()
// 	})
// })

export {}
