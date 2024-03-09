import { Navbar } from './Components/pages/Navbar/Navbar'
import './styles/index.css'
import { MainRouter } from './Routes/MainRouter'

export const App = () => {
	return (
		<>
			<Navbar />
			<MainRouter />
		</>
	)
}
