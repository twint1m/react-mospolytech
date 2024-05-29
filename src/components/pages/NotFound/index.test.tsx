import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from './index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('Проверка работоспособности ссылки на странице 404', () => {
	it('Переадресация на главную страницу при клике на кнопку', () => {
		render(
			<Router>
				<NotFound />
			</Router>
		)

		const link = screen.getByText('На главную').closest('a')
		expect(link).toHaveAttribute('href', '/')

		link?.click()

		expect(window.location.pathname).toBe('/')
	})
})
