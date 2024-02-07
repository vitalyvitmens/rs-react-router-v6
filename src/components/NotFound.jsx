// Импортируем необходимые библиотеки
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Создаем компонент для страницы NotFound
function NotFound() {
	// Возвращаем JSX-разметку, которая описывает, как выглядит наша страница NotFound
	return (
		<div className="NotFound">
			{/* Используем компонент Container из библиотеки react-bootstrap, чтобы центрировать наш контент */}
			<Container>
				{/* Используем компонент Row из библиотеки react-bootstrap, чтобы создать строку с одним столбцом */}
				<Row>
					{/* Используем компонент Col из библиотеки react-bootstrap, чтобы создать столбец, который занимает все 12 колонок сетки */}
					<Col xs={12}>
						{/* Отображаем заголовок с текстом "Страница не найдена" */}
						<h1>Страница не найдена</h1>
						{/* Отображаем параграф с текстом "К сожалению, мы не можем найти страницу, которую вы ищете." */}
						<p>К сожалению, мы не можем найти страницу, которую вы ищете.</p>
						{/* Отображаем кнопку с текстом "Вернуться на главную" и ссылкой на главную страницу с помощью компонентов Button и Link из библиотек react-bootstrap и react-router-dom */}
						<Button variant="primary">
							<Link to="/">Вернуться на главную</Link>
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

// Экспортируем компонент для страницы NotFound
export default NotFound
