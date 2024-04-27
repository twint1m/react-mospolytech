import { PaginationWrapper, ObserverBlock, CardWrapper } from './styles'
import Loader from '../../ui/Loader'
import { UniversityData } from './types'
// import { UniversityData } from './types'
// import { UniversityData } from './types'
import { useDynamicPagination } from './hook'
import { UniversityTable } from './UniversityCard'

export const DynamicPagination = () => {
	const { universitiesData, loading, ref } = useDynamicPagination()

	return (
		<>
			<PaginationWrapper>
				<CardWrapper>
					{universitiesData?.map(
						(university: UniversityData, index: number) => (
							<UniversityTable key={index} data={university} />
						)
					)}
				</CardWrapper>
				{loading && <Loader />}
				{!loading && <ObserverBlock ref={ref} />}
			</PaginationWrapper>
		</>
	)
}

export default DynamicPagination

// TODO: переписать на useInfiniteQuery
