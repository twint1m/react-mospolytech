import { useState } from 'react'
import { IMyForm } from './types'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useTasks = () => {
	const [tasks, setTasks] = useState<IMyForm[]>([])

	const saveElement: SubmitHandler<IMyForm> = data => {
		setTasks(prev => [...prev, data])
		reset()
	}
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm<IMyForm>({
		mode: 'onBlur'
	})
	return {
		tasks,
		setTasks,
		handleSubmit,
		saveElement,
		register,
		errors,
		isValid
	}
}
