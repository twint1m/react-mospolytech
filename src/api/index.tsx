import { useState, useMemo, useEffect } from 'react'
import axios from 'axios'
import { DataType } from './types'

export const useFetchData = (url: string, limit: number) => {
	const [dataSource, setDataSource] = useState<DataType[]>([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState<number>(1)

	const getData = async (offset = 25) => {
		try {
			setLoading(true)
			const response = await axios.get(`${url}limit=${limit}&offset=${offset}`)
			setDataSource(response.data)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}
	const memoizedGetData = useMemo(() => getData, [url, limit])

	useEffect(() => {
		getData((page - 1) * limit)
	}, [page, limit])

	return {
		dataSource,
		loading,
		page,
		setPage,
		limit,
		getData: memoizedGetData
	}
}
