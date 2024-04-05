import Home from '../components/pages/Home'
import UniversityTable from '../components/pages/UniversityTable'
import Form from '../components/pages/Form/'
import Order from '../components/pages/Order'
import PdfForm from '../components/pages/PdfForm'
import DynamicPagination from '../components/pages/DynamicPagination'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false,
		name: 'Главная'
	},
	{
		path: '/university',
		component: UniversityTable,
		isAuth: false,
		name: 'Университеты'
	},
	{
		path: '/form',
		component: Form,
		isAuth: false,
		name: 'Форма'
	},
	{
		path: '/order',
		component: Order,
		isAuth: true,
		name: 'Заказы'
	},
	{
		path: '/download',
		component: PdfForm,
		isAuth: false,
		name: 'Загрузка'
	},
	{
		path: '/dynamic-pagination',
		component: DynamicPagination,
		isAuth: false,
		name: 'Пагинация'
	}
]
