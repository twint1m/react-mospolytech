import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import { ContextProvider } from './context'
import QueryClientContext from './clients/queryClient'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<>
		<QueryClientContext>
			<ContextProvider>
				<BrowserRouter basename={'/react-mospolytech'}>
					<GlobalStyles />
					<App />
				</BrowserRouter>
			</ContextProvider>
		</QueryClientContext>
	</>
)
