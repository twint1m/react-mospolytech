import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Context } from '../providers'

export const useAuth = () => {
	// const navigate = useNavigate()
	const { isAuth, setIsAuth } = useContext(Context)

	const handleClick = () => {
		if (isAuth) {
			setIsAuth(!isAuth)
			// navigate('/')
		} else {
			setIsAuth(!isAuth)
		}
	}

	return {
		isAuth,
		setIsAuth,
		handleClick
	}
}
