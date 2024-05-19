import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface ContextType {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
	currentTheme: 'dark' | 'light'
	setCurrentTheme: Dispatch<SetStateAction<'dark' | 'light'>>
}

export const Context = createContext<ContextType>({
	isAuth: false,

	setIsAuth: () => {},
	currentTheme: 'dark',

	setCurrentTheme: () => {}
})

export interface ContextProviderProps {
	children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [isAuth, setIsAuth] = useState(false)
	const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark')
	return (
		<Context.Provider
			value={{ isAuth, setIsAuth, currentTheme, setCurrentTheme }}
		>
			{children}
		</Context.Provider>
	)
}
