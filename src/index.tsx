import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles'
import { ContextProvider } from './providers'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
	<>
		<QueryClientProvider client={queryClient}>
			<ContextProvider>
				<BrowserRouter>
					<GlobalStyles />
					<App />
				</BrowserRouter>
			</ContextProvider>
		</QueryClientProvider>
	</>
)
