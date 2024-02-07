// Импортируем необходимые библиотеки
import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Создаем компонент для главной страницы
function Home() {
	return (
		// Создаем большой блок с приветствием и ссылками на категории с помощью react-bootstrap
		<Container>
			<h1>Добро пожаловать в Rick and Morty App!</h1>
			<p>
				Это интерактивное приложение, которое позволяет тебе узнать больше о
				персонажах, локациях и эпизодах из популярного мультсериала Рик и Морти.
			</p>
			<p>
				Выбери категорию, которая тебя интересует, и начни свое приключение в
				мультивселенной!
			</p>
			<p>
				{/* Создаем кнопки с ссылками на категории с помощью react-bootstrap и react-router-dom */}
				<Link to="/characters">
					<Button variant="primary">Герои</Button>
				</Link>{' '}
				<Link to="/locations">
					<Button variant="success">Локации</Button>
				</Link>{' '}
				<Link to="/episodes">
					<Button variant="warning">Эпизоды</Button>
				</Link>
			</p>
		</Container>
	)
}

// Экспортируем компонент для главной страницы
export default Home
