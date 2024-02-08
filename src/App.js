import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import { Button } from './components/Button/Button.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
import styles from './app.module.css'

export const App = () => {
	// Возвращаем JSX-разметку, которая описывает, как выглядит наше приложение
	return (
		// Используем компонент BrowserRouter из библиотеки react-router-dom для создания роутера
		<BrowserRouter>
			{/* Используем компонент Routes из библиотеки react-router-dom для создания маршрутов */}
			<Routes>
				{/* Создаем маршрут для главной страницы с помощью компонента Route из библиотеки react-router-dom */}
				<Route path="/" element={<Home />} />
				{/* Создаем маршрут для страницы категории с помощью компонента Route из библиотеки react-router-dom */}
				<Route path="/:category" element={<Category />} />
				{/* Создаем маршрут для детальной страницы элемента с помощью компонента Route из библиотеки react-router-dom */}
				<Route path="/:category/:id" element={<Detail />} />
				{/* Создаем маршрут для страницы 404 с помощью компонента Route из библиотеки react-router-dom */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
