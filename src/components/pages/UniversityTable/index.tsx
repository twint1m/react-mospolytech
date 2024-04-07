import { columns } from './constants'
import { useUniversityData } from './hook'
import { Button, ButtonsWrapper, PageNumber } from './styles'
import { Table } from 'antd'

const UniversityTable = () => {
	const { dataSource, loading, page, setPage } = useUniversityData()

	return (
		<>
			<Table dataSource={dataSource} columns={columns} pagination={false} />
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
