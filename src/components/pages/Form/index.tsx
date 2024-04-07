import { useTasks } from './hook'
import { FormWrapper, Label, Input, Button } from './styles'

const Form: React.FC = () => {
	const { tasks, handleSubmit, saveElement, register, errors, isValid } =
		useTasks()

	return (
		<FormWrapper onSubmit={handleSubmit(saveElement)}>
			<Label>
				Имя:
				<Input
					placeholder='Введите ваше имя'
					type='text'
					{...register('name', {
						required: 'Обязательно к заполнению',
						minLength: {
							value: 1,
							message: 'Больше слов'
						}
					})}
				/>
			</Label>
			<Label>
				Возраст:
				<Input
					placeholder='Введите ваш возраст'
					type='number'
					{...register('age', {
						required: 'Обязательно к заполнению',
						minLength: {
							value: 2,
							message: 'Больше цифр'
						}
					})}
				/>
			</Label>
			<Label>
				Почта:
				<Input
					placeholder='Введите вашу почту'
					type='email'
					{...register('email', {
						required: 'Обязательно к заполнению',
						pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
						minLength: {
							value: 10,
							message: 'Введите почту форма example@site.ru'
						}
					})}
				/>
			</Label>
			<Label>
				Номер телефона:
				<Input
					placeholder='Введите номер вашего телефона'
					{...register('phoneNumber', {
						required: 'Обязательно к заполнению',
						pattern: /^\d{10}$/,
						maxLength: {
							value: 15,
							message: 'Введите номер телефона без +'
						}
					})}
				/>
			</Label>
			<p>{errors.name?.message}</p>
			<Button disabled={!isValid} type='submit'>
				Сохранить
			</Button>
			{tasks.map(task => (
				<p>
					{task.name} - {task.age}
				</p>
			))}
		</FormWrapper>
	)
}

export default Form
