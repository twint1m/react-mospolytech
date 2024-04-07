import { Navbar } from './components/pages/Navbar'
import './styles/index.css'
import { MainRouter } from './routes/MainRouter'

export const App = () => {
	return (
		<>
			<Navbar />
			<MainRouter />
		</>
	)
}
