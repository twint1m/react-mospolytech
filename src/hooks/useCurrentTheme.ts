import { useContext } from 'react'
import { Context } from '../context'

export const useCurrentTheme = () => {
	const { currentTheme, setCurrentTheme } = useContext(Context)

	const changeTheme = () => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', newTheme)
		setCurrentTheme(newTheme)
	}

	return { currentTheme, setCurrentTheme, changeTheme }
}
