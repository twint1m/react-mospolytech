import { PaginationWrapper, ObserverBlock, CardWrapper } from './styles'
import Index from './UniversityCard'
// import { useDynamicPagination } from './hook'
import Loader from '../../ui/Loader'
// import { usePagination } from './UniversityCard/hok'
// import { useInfinite } from './UniversityCard/infiniteQuery'
// import { UniversityData } from './types'
import { useDynamicPagination } from './hook'

export const DynamicPagination = () => {
	const { universitiesData, loading, ref } = useDynamicPagination()
	// const { data, isLoading, error, ref } = useInfinite()

	return (
		<>
			<PaginationWrapper>
				{/* {error && <h1>error</h1>} */}
				<CardWrapper>
					{universitiesData?.length > 0 &&
						universitiesData.map((university, index) => (
							<Index key={index} data={university} />
						))}
					{!loading && <ObserverBlock ref={ref} />}
				</CardWrapper>
				{loading && <Loader />}
			</PaginationWrapper>
		</>
	)
}

export default DynamicPagination
