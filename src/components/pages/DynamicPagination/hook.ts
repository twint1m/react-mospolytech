import { useEffect, useState } from 'react'
import axios from 'axios'
import { LIMIT_LIST_SCHOOL } from '../../../constants/schoolLimit'
import { IUniversityData } from './types'
import { useInView } from 'react-intersection-observer'

export const useDynamicPagination = () => {
	const [universitiesData, setUniversitiesData] = useState<IUniversityData[]>(
		[]
	)
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false)

	const fetchUniversitiesData = async () => {
		try {
			setLoading(true)
			const offset = (currentPage - 1) * LIMIT_LIST_SCHOOL
			const { data } = await axios.get(
				`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`
			)
			setUniversitiesData(prev => [...prev, ...data])
		} catch (error) {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			console.error(`Ошибка при получении данных... ${error}`)
		} finally {
			setLoading(false)
		}
	}
	useEffect(() => {
		void fetchUniversitiesData()
	}, [currentPage])

	const { ref, inView } = useInView({
		threshold: 1.0
	})

	useEffect(() => {
		if (inView) {
			setCurrentPage(prev => prev + 1)
		}
	}, [inView])

	return { universitiesData, loading, ref }
}
