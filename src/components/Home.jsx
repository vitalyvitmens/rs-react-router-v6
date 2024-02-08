import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { useFetch } from '../Hooks/useFetch'
import { Card, ListGroup, Spinner, Navbar, Nav, Form } from 'react-bootstrap'
import Navigation from './Navigation'

export default function Home() {
	// Возвращаем JSX-разметку, которая описывает, как выглядит наша главная страница
	return (
		<div className="Home">
			{/* Главная страница содержит приветствие и навигационную панель для доступа к категориям */}
			<h1>Добро пожаловать в приложение по вселенной Рика и Морти!</h1>
			<Navigation />
		</div>
	)
}

