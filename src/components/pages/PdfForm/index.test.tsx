import { describe } from 'vitest'
import { render, screen, userEvent } from '../../../tests'
import PdfForm from './index'

describe('PdfForm', () => {
	it('check input', async () => {
		render(<PdfForm />)

		const input = screen.getByTestId('input-update')

		userEvent.type(input, '')

		// userEvent.click(input)
		//
		// expect(await screen.findAllByAltText('test'))
		// expect(await screen.findByPlaceholderText('Введите ваше имя'))
	})
})
