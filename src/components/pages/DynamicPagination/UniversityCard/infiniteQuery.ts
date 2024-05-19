// import { useInfiniteQuery } from '@tanstack/react-query'
// import axios from 'axios'
// import { LIMIT_LIST_SCHOOL } from '../../../../constants/schoolLimit'
// import { useInView } from 'react-intersection-observer'
// import { useEffect } from 'react'
//
// export const useInfinite = () => {
// 	const fetchUniversities = async ({ pageParam = 1 }) => {
// 		const offset = (pageParam - 1) * LIMIT_LIST_SCHOOL
// 		const response = await axios.get(
// 			`http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_LIST_SCHOOL}`
// 		)
// 		return response.data
// 	}
//
// 	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
// 		useInfiniteQuery('university', fetchUniversities, {
// 			getNextPageParam: (lastPage, allPages) => lastPage.nextCursor
// 		})
//
// 	const { ref, inView } = useInView({
// 		threshold: 1.0
// 	})
// 	useEffect(() => {
// 		if (inView && hasNextPage) {
// 			fetchNextPage()
// 		}
// 	}, [inView, hasNextPage, fetchNextPage])
//
// 	return { data, isFetchingNextPage, error, ref }
// }

export {}
