import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

interface IProps {
	children: React.ReactNode
}

const query = new QueryClient()

const QueryClientContext = ({ children }: IProps) => (
	<QueryClientProvider client={query}>{children}</QueryClientProvider>
)

export default QueryClientContext
