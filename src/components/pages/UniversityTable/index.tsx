import { Button, ButtonsWrapper, PageNumber } from './styles'
import { Table } from 'antd'
import { useFetchData } from '../../../api'
import { UniversityTables } from './constants'

const UniversityTable = () => {
	const { dataSource, loading, page, setPage } = useFetchData(
		'http://universities.hipolabs.com/search?',
		25
	)

	return (
		<>
			<Table
				dataSource={dataSource}
				columns={UniversityTables}
				pagination={false}
			/>
			<ButtonsWrapper>
				<Button
					onClick={() => {
						setPage(page - 1)
					}}
					disabled={page === 1 || loading}
				>
					Назад
				</Button>
				<PageNumber>{page}</PageNumber>
				<Button
					onClick={() => {
						setPage(page + 1)
					}}
					disabled={loading}
				>
					Вперед
				</Button>
			</ButtonsWrapper>
		</>
	)
}

export default UniversityTable
