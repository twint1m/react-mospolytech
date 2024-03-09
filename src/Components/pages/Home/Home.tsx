import reactIcon from '../../../assets/images/react.gif'
import styled from 'styled-components'

const ReactIcon = styled.img`
	display: flex;
	margin: 100px auto;
`

export const Home = () => (
	<>
		<h1>Главная страница</h1>
		<ReactIcon src={reactIcon} alt='React Icon' />
	</>
)
