import styled from 'styled-components'

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Button = styled.button`
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

export const PageNumber = styled.span`
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
