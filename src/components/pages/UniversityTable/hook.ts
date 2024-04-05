import { useState, useEffect } from 'react'
import axios from 'axios'
import { DataType } from './types'
import { LIMIT_LIST_SCHOOL } from '../../../constants/schoolLimit'

export const useUniversityData = () => {
	const [dataSource, setDataSource] = useState<DataType[]>([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState<number>(1)

	const getUniversity = async (page: number, limit: number) => {
		try {
			setLoading(true)
			const response = await axios.get(
				`http://universities.hipolabs.com/search?limit=${limit}&offset=${
					(page - 1) * limit
				}`
			)
			setDataSource(response.data)
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			console.error(`Ошибка при получении информации: ${error}`)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getUniversity(page, LIMIT_LIST_SCHOOL)
	}, [page])

	return {
		dataSource,
		loading,
		page,
		setPage
	}
}

// TODO: вынести getUniversity в /api
