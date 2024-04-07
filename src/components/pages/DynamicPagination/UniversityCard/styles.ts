import styled from 'styled-components'

export const Card = styled.div`
	max-width: 300px;
	border: 1px solid #ddd;
	border-radius: 5px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
	margin: 20px;
	padding: 20px;
	align-items: center;
	background-color: #f5f5f5;

	> h1 {
		grid-column: span 2;
		font-weight: bold;
		color: #333;
		font-size: 24px;
		margin-bottom: 10px;
	}

	> span {
		font-style: italic;
		color: #777;
		font-size: 18px;
		background: transparent;
	}
`
