import { UniversityData } from '../types'

import { FC } from 'react'

import { Card } from './styles'

export const UniversityTable: FC<{ data: UniversityData }> = ({ data }) => {
	return (
		<Card>
			<h1>{data.name}</h1>
			<span>{data.country}</span>
		</Card>
	)
}

export default UniversityTable
