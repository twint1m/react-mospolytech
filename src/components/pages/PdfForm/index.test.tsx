// import { describe } from 'vitest'
// import { render, screen, userEvent } from '../../../tests'
// import PdfForm from './index'
// import { waitFor } from '@testing-library/react'
//
// describe('PdfForm', async () => {
// 	it('check input', async () => {
// 		render(<PdfForm />)
//
// 		const nameInput = screen.getByTestId('input-name')
// 		const pictureInput = screen.getByTestId('input-picture')
// 		const image = new File([''], './test-image.jpeg', { type: 'image/jpeg' })
// 		const submitButton = screen.getByTestId('submit-button')
//
// 		await userEvent.type(nameInput, 'Timur')
// 		await userEvent.upload(pictureInput, image)
// 		await userEvent.click(submitButton)
//
// 		await waitFor(() => {
// 			const downloadLink = screen.getByText('Скачать')
// 			expect(downloadLink).toBeInTheDocument()
// 		})
// 	})
// })

export {}
