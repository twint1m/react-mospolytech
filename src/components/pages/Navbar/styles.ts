import styled from 'styled-components'

import { StyledProp } from '../../../interfaces/IStyledProp'

export const Navigation = styled.nav<StyledProp>`
	color: --text-color;
	height: max-content;
	padding: 20px 0;
	display: flex;
	justify-content: space-around;
	font-size: 20px;
	text-align: center;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0 auto;
		align-items: center;
		gap: 20px;
	}
`

export const Button = styled.button`
	color: --text-color;
	width: 150px;
	height: 50px;
	border: 0;
	border-radius: 10px;
	font-size: 20px;
	cursor: pointer;
`

export const ChangeThemeButton = styled.button`
	color: --text-color;
	width: 70px;
	height: 50px;
	border: 0;
	border-radius: 10px;
	cursor: pointer;
`

export const NavigationHeader = styled.header``
