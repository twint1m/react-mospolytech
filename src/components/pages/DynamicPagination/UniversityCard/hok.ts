import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LIMIT_LIST_SCHOOL } from '../../../../constants/schoolLimit'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const usePagination = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const fetchUniversities = async (currentPage: number) => {
		const offset = (currentPage - 1) * LIMIT_LIST_SCHOOL

		return await axios.get(
			`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`
		)
	}

	const { data, isLoading } = useQuery({
		queryKey: ['universities', currentPage],
		queryFn: async () => await fetchUniversities(currentPage)
	})

	const { ref, inView } = useInView({
		threshold: 1.0
	})

	useEffect(() => {
		if (inView) {
			setCurrentPage(prev => prev + 1)
		}
	}, [inView])

	return { data, isLoading, ref }
}
