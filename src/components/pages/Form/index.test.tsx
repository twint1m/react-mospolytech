import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Form from './index'
import { useTasks } from './hook'
import { vi } from 'vitest'

vi.mock('./hook', () => ({
	useTasks: vi.fn()
}))

const mockedUseTasks = useTasks as jest.MockedFunction<typeof useTasks>

describe('Компонент формы', () => {
	beforeEach(() => {
		// @ts-ignore
		mockedUseTasks.mockReturnValue({
			tasks: [],
			handleSubmit: (fn: any) => fn,
			saveElement: vi.fn(),
			register: vi.fn().mockReturnValue({}),
			errors: {},
			isValid: false
		})
	})

	it('Проверка изначального состояния ссылки', () => {
		render(<Form />)

		const submitButton = screen.getByText('Сохранить')
		expect(submitButton).toBeDisabled()
	})

	it('Заполнение формы', async () => {
		const saveElementMock = vi.fn()
		// @ts-ignore
		mockedUseTasks.mockReturnValue({
			tasks: [],
			handleSubmit: (fn: any) => fn,
			saveElement: saveElementMock,
			register: vi.fn().mockReturnValue({}),
			errors: {},
			isValid: true
		})

		render(<Form />)

		fireEvent.input(screen.getByPlaceholderText('Введите ваше имя'), {
			target: { value: 'John' }
		})
		fireEvent.input(screen.getByPlaceholderText('Введите ваш возраст'), {
			target: { value: '25' }
		})
		fireEvent.input(screen.getByPlaceholderText('Введите вашу почту'), {
			target: { value: 'john@example.com' }
		})
		fireEvent.input(
			screen.getByPlaceholderText('Введите номер вашего телефона'),
			{
				target: { value: '1234567890' }
			}
		)

		const submitButton = screen.getByText('Сохранить')
		expect(submitButton).not.toBeDisabled()

		fireEvent.click(submitButton)

		await waitFor(() => {
			expect(saveElementMock).toHaveBeenCalled()
		})
	})
})
