import styled from 'styled-components'
import { StyledProp } from '../../../interfaces/IStyledProp'

export const Navigation = styled.nav<StyledProp>`
	color: --text-color;
	height: max-content;
	padding: 20px 0;
	display: ${({ displayFlex }) => (displayFlex ? displayFlex : 'flex')};
	justify-content: space-around;
	font-size: 20px;
	text-align: center;
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
