// import React from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { Card, CardGroup } from 'react-bootstrap'

// // Импортируем JSON-файлы с данными
// import characters from '../data/characters.json'
// import locations from '../data/locations.json'
// import episodes from '../data/episodes.json'

// // Создаем компонент для страницы категории
// function Category() {
// 	// Получаем параметр категории из URL-адреса с помощью хука useParams
// 	const { category } = useParams()

// 	// Определяем, какой JSON-файл импортировать в зависимости от категории
// 	let data = []
// 	switch (category) {
// 		case 'characters':
// 			data = characters
// 			break
// 		case 'locations':
// 			data = locations
// 			break
// 		case 'episodes':
// 			data = episodes
// 			break
// 		default:
// 			data = []
// 	}

// 	// Возвращаем JSX-разметку, которая описывает, как выглядит наша страница категории
// 	return (
// 		<div className="Category">
// 			{/* Отображаем заголовок с названием категории */}
// 			<h1>{category}</h1>
// 			{/* Отображаем колонки с карточками элементов с помощью компонентов CardColumns и Card из библиотеки react-bootstrap */}
// 			<CardGroup>
// 				{/* Проходимся по массиву данных с помощью метода map и создаем карточку для каждого элемента */}
// 				{data.map((item) => (
// 					// Каждая карточка имеет уникальный ключ, который равен id элемента
// 					<Card key={item.id}>
// 						{/* Карточка содержит изображение элемента, если оно есть */}
// 						{item.image && <Card.Img variant="top" src={item.image} />}
// 						{/* Карточка содержит заголовок с именем элемента */}
// 						<Card.Header>{item.name}</Card.Header>
// 						{/* Карточка содержит ссылку на детальную страницу элемента с помощью компонента Link из библиотеки react-router-dom */}
// 						<Card.Body>
// 							<Link to={`/${category}/${item.id}`}>Подробнее</Link>
// 						</Card.Body>
// 					</Card>
// 				))}
// 			</CardGroup>
// 		</div>
// 	)
// }

// export default Category

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardGroup, Spinner } from 'react-bootstrap'
import axios from 'axios'

// Создаем компонент для страницы категории
function Category() {
	// Получаем параметр категории из URL-адреса с помощью хука useParams
	const { category } = useParams()

	// Создаем состояние для хранения данных и статуса загрузки с помощью хука useState
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	// Создаем эффект для получения данных с сервера с помощью хука useEffect
	useEffect(() => {
		// Определяем URL-адрес для запроса в зависимости от категории
		let url = 'http://localhost:3005/'
		if (category === 'characters') {
			url = 'http://localhost:3005/characters'
		} else if (category === 'locations') {
			url = 'http://localhost:3005/locations'
		} else if (category === 'episodes') {
			url = 'http://localhost:3005/episodes'
		}

		// Отправляем GET-запрос к серверу с помощью библиотеки axios
		axios
			.get(url)
			.then((response) => {
				// Если запрос успешен, сохраняем данные в состояние и меняем статус загрузки на false
				setData(response.data)
				setLoading(false)
			})
			.catch((error) => {
				// Если запрос неудачен, выводим ошибку в консоль и меняем статус загрузки на false
				console.error(error)
				setLoading(false)
			})
	}, [category]) // Перезапускаем эффект при изменении категории

	// Возвращаем JSX-разметку, которая описывает, как выглядит наша страница категории
	return (
		<div className="Category">
			{/* Проверяем, загружаются ли данные */}
			{loading ? (
				// Если да, то отображаем спиннер с помощью компонента Spinner из библиотеки react-bootstrap
				<Spinner animation="border" role="status">
					<span
						className="visually-hidden"
						style={{ fontSize: '3rem', fontWeight: 600 }}
					>
						Загрузка...
					</span>
				</Spinner>
			) : (
				// Если нет, то отображаем карточки с данными с помощью компонентов Card и CardGroup из библиотеки react-bootstrap
				<CardGroup>
					{/* Проходимся по массиву данных с помощью метода map и создаем карточку для каждого элемента */}
					{data.map((item) => (
						// Каждая карточка имеет уникальный ключ, который равен id элемента
						<Card key={item.id}>
							{/* Карточка содержит изображение элемента, если оно есть */}
							{item.image && <Card.Img variant="top" src={item.image} />}
							{/* Карточка содержит заголовок с именем элемента и ссылкой на детальную страницу */}
							<Card.Header>
								<Link to={`/${category}/${item.id}`}>{item.name}</Link>
							</Card.Header>
							{/* Карточка содержит тело с дополнительной информацией об элементе в зависимости от категории */}
							<Card.Body>
								{category === 'characters' && (
									<div>
										<p>Статус: {item.status}</p>
										<p>Вид: {item.species}</p>
										<p>Тип: {item.type || 'нет'}</p>
										<p>Пол: {item.gender}</p>
									</div>
								)}
								{category === 'locations' && (
									<div>
										<p>Тип: {item.type}</p>
										<p>Измерение: {item.dimension}</p>
									</div>
								)}
								{category === 'episodes' && (
									<div>
										<p>Дата выхода: {item.air_date}</p>
										<p>Номер эпизода: {item.episode}</p>
									</div>
								)}
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			)}
		</div>
	)
}

// Экспортируем компонент для страницы категории
export default Category
