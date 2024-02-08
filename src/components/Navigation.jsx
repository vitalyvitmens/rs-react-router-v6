import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { useFetch } from '../Hooks/useFetch'
import { Card, ListGroup, Spinner, Navbar, Nav, Form } from 'react-bootstrap'

// Создаем компонент для навигационной панели
export default function Navigation() {
	// Возвращаем JSX-разметку, которая описывает, как выглядит наша навигационная панель
	return (
		// Используем компонент Navbar из библиотеки react-bootstrap для создания навигационной панели
		<Navbar bg="light" expand="lg">
			{/* Навигационная панель содержит логотип и ссылку на главную страницу */}
			<Navbar.Brand>
				<Link to="/">
					<img src="logo.png" alt="logo" width="50" height="50" />
				</Link>
			</Navbar.Brand>
			{/* Навигационная панель содержит переключатель для мобильных устройств */}
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			{/* Навигационная панель содержит ссылки на категории (герои, локации, эпизоды) */}
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/characters">Герои</Link>
					<Link to="/locations">Локации</Link>
					<Link to="/episodes">Эпизоды</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
