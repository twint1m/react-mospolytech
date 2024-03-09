import React from 'react'
import styled from 'styled-components'
import { columns } from '../../../constants/constants'
import { Table } from 'antd'
import { useUniversityData } from '../../../hooks/useUniversityData'

export const UniversityTable = () => {
	const { dataSource, loading, page, setPage } = useUniversityData()
	const ButtonsWrapper = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	`

	const Button = styled.button`
		margin: 15px;
		width: 100px;
		height: 40px;
		border: 0;
		color: white;
		border-radius: 10px;
		&:disabled {
			background-color: #8080801e;
		}
	`

	const PageNumber = styled.span`
		display: flex;
		align-items: center;
		background-color: darkgrey;
		border: 0;
		color: white;
		border-radius: 10px;
		width: 40px;
		height: 40px;
		justify-content: center;
	`
	return (
		<>
			<Table dataSource={dataSource} columns={columns} pagination={false} />
			<ButtonsWrapper>
				<Button
					onClick={() => setPage(page - 1)}
					disabled={page === 1 || loading}
				>
					Назад
				</Button>
				<PageNumber>{page}</PageNumber>
				<Button onClick={() => setPage(page + 1)} disabled={loading}>
					Вперед
				</Button>
			</ButtonsWrapper>
		</>
	)
}
