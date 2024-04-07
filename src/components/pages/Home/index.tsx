// import reactGif from '../../../assets/images/react.gif'
import styled from 'styled-components'

const ReactIcon = styled.img`
	display: flex;
	margin: 100px auto;
`

const Home = () => (
	<>
		<h1>Главная страница</h1>
		<ReactIcon src={'../'} alt='React Icon' />
	</>
)

export default Home
