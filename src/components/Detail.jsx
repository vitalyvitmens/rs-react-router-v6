// // Импортируем необходимые библиотеки
// import React from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { Card, ListGroup, Spinner } from 'react-bootstrap'
// import { getEpisodeName } from '../utils/getEpisodeName'
// import { getCharacterName } from '../utils/getCharacterName'

// // Импортируем JSON-файлы с данными
// import characters from '../data/characters.json'
// import locations from '../data/locations.json'
// import episodes from '../data/episodes.json'

// // Создаем компонент для детальной страницы элемента
// function Detail() {
// 	// Получаем параметры категории и id из URL-адреса с помощью хука useParams
// 	const { category, id } = useParams()

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

// 	// Находим нужный элемент в массиве данных с помощью метода find
// 	const item = data.find((item) => item.id === Number(id))

// 	// Возвращаем JSX-разметку, которая описывает, как выглядит наша детальная страница элемента
// 	return (
// 		<div className="Detail">
// 			{/* Проверяем, нашли ли мы элемент */}
// 			{item ? (
// 				// Если да, то отображаем карточку с данными с помощью компонента Card из библиотеки react-bootstrap
// 				<Card>
// 					{/* Карточка содержит изображение элемента, если оно есть */}
// 					{item.image && <Card.Img variant="top" src={item.image} />}
// 					{/* Карточка содержит заголовок с именем элемента */}
// 					<Card.Header>{item.name}</Card.Header>
// 					{/* Карточка содержит тело с дополнительной информацией об элементе в зависимости от категории */}
// 					<Card.Body>
// 						{category === 'characters' && (
// 							<div>
// 								<p>Статус: {item.status}</p>
// 								<p>Вид: {item.species}</p>
// 								<p>Тип: {item.type || 'нет'}</p>
// 								<p>Пол: {item.gender}</p>
// 								<p>Место рождения: {item.origin.name}</p>
// 								<p>Текущее местоположение: {item.location.name}</p>
// 								{/* Создаем список с эпизодами, в которых участвовал элемент, с помощью компонента ListGroup из библиотеки react-bootstrap */}
// 								<p>Эпизоды:</p>
// 								<ListGroup>
// 									{/* Проходимся по массиву эпизодов с помощью метода map и создаем элемент списка для каждого эпизода */}
// 									{item.episode.map((ep) => (
// 										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу эпизода
// 										<ListGroup.Item key={ep}>
// 											{/* Элемент списка содержит ссылку на детальную страницу эпизода с помощью компонента Link из библиотеки react-router-dom */}
// 											<Link to={`/episodes/${ep.split('/').pop()}`}>
// 												{/* Ссылка содержит название эпизода, которое мы получаем с помощью функции getEpisodeName */}
// 												{getEpisodeName(ep)}
// 											</Link>
// 										</ListGroup.Item>
// 									))}
// 								</ListGroup>
// 							</div>
// 						)}
// 						{category === 'locations' && (
// 							<div>
// 								<p>Тип: {item.type}</p>
// 								<p>Измерение: {item.dimension}</p>
// 								{/* Создаем список с персонажами, которые находятся в элементе, с помощью компонента ListGroup из библиотеки react-bootstrap */}
// 								<p>Персонажи:</p>
// 								<ListGroup>
// 									{/* Проходимся по массиву персонажей с помощью метода map и создаем элемент списка для каждого персонажа */}
// 									{item.residents.map((res) => (
// 										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу персонажа
// 										<ListGroup.Item key={res}>
// 											{/* Элемент списка содержит ссылку на детальную страницу персонажа с помощью компонента Link из библиотеки react-router-dom */}
// 											<Link to={`/characters/${res.split('/').pop()}`}>
// 												{/* Ссылка содержит имя персонажа, которое мы получаем с помощью функции getCharacterName */}
// 												{getCharacterName(res)}
// 											</Link>
// 										</ListGroup.Item>
// 									))}
// 								</ListGroup>
// 							</div>
// 						)}
// 						{category === 'episodes' && (
// 							<div>
// 								<p>Номер эпизода: {item.episode}</p>
// 								<p>Дата выхода: {item.air_date}</p>
// 								{/* Создаем список с персонажами, которые участвовали в элементе, с помощью компонента ListGroup из библиотеки react-bootstrap */}
// 								<p>Персонажи:</p>
// 								<ListGroup>
// 									{/* Проходимся по массиву персонажей с помощью метода map и создаем элемент списка для каждого персонажа */}
// 									{item.characters.map((char) => (
// 										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу персонажа
// 										<ListGroup.Item key={char}>
// 											{/* Элемент списка содержит ссылку на детальную страницу персонажа с помощью компонента Link из библиотеки react-router-dom */}
// 											<Link to={`/characters/${char.split('/').pop()}`}>
// 												{/* Ссылка содержит имя персонажа, которое мы получаем с помощью функции getCharacterName */}
// 												{getCharacterName(char)}
// 											</Link>
// 										</ListGroup.Item>
// 									))}
// 								</ListGroup>
// 							</div>
// 						)}
// 					</Card.Body>
// 				</Card>
// 			) : (
// 				// Если нет, то отображаем спиннер с помощью компонента Spinner из библиотеки react-bootstrap
// 				<Spinner animation="border" />
// 			)}
// 		</div>
// 	)
// }

// export default Detail

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, ListGroup, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { getEpisodeName } from '../utils/getEpisodeName'
import { getCharacterName } from '../utils/getCharacterName'

// Создаем компонент для детальной страницы элемента
function Detail() {
	// Получаем параметры категории и id из URL-адреса с помощью хука useParams
	const { category, id } = useParams()

	// Создаем состояние для хранения данных и статуса загрузки с помощью хука useState
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

	// Создаем эффект для получения данных с сервера с помощью хука useEffect
	useEffect(() => {
		// Определяем URL-адрес для запроса в зависимости от категории и id
		let url = 'http://localhost:3005/'
		if (category === 'characters') {
			url = `/data/characters/${id}.json`
		} else if (category === 'locations') {
			url = `/data/locations/${id}.json`
		} else if (category === 'episodes') {
			url = `/data/episodes/${id}.json`
		}
		// if (category === 'characters') {
		// 	url = `http://localhost:3005/characters/${id}`
		// } else if (category === 'locations') {
		// 	url = `http://localhost:3005/locations/${id}`
		// } else if (category === 'episodes') {
		// 	url = `http://localhost:3005/episodes/${id}`
		// }


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
	}, [category, id]) // Перезапускаем эффект при изменении категории или id

	// Возвращаем JSX-разметку, которая описывает, как выглядит наша детальная страница элемента
	return (
		<div className="Detail">
			{/* Проверяем, загружаются ли данные */}
			{loading ? (
				// Если да, то отображаем спиннер с помощью компонента Spinner из библиотеки react-bootstrap
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Загрузка...</span>
				</Spinner>
			) : (
				// Если нет, то отображаем карточку с данными с помощью компонента Card из библиотеки react-bootstrap
				<Card>
					{/* Карточка содержит изображение элемента, если оно есть */}
					{data.image && <Card.Img variant="top" src={data.image} />}
					{/* Карточка содержит заголовок с именем элемента */}
					<Card.Header>{data.name}</Card.Header>
					{/* Карточка содержит тело с дополнительной информацией об элементе в зависимости от категории */}
					<Card.Body>
						{category === 'characters' && (
							<div>
								<p>Статус: {data.status}</p>
								<p>Вид: {data.species}</p>
								<p>Тип: {data.type || 'нет'}</p>
								<p>Пол: {data.gender}</p>
								<p>Место рождения: {data.origin.name}</p>
								<p>Текущее местоположение: {data.location.name}</p>
								{/* Создаем список с эпизодами, в которых участвовал элемент, с помощью компонента ListGroup из библиотеки react-bootstrap */}
								<p>Эпизоды:</p>
								<ListGroup>
									{/* Проходимся по массиву эпизодов с помощью метода map и создаем элемент списка для каждого эпизода */}
									{data.episode.map((ep) => (
										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу эпизода
										<ListGroup.Item key={ep}>
											{/* Элемент списка содержит ссылку на детальную страницу эпизода с помощью компонента Link из библиотеки react-router-dom */}
											<Link to={`/episodes/${ep.split('/').pop()}`}>
												{/* Ссылка содержит название эпизода, которое мы получаем с помощью функции getEpisodeName */}
												{getEpisodeName(ep)}
											</Link>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
						)}
						{category === 'locations' && (
							<div>
								<p>Тип: {data.type}</p>
								<p>Измерение: {data.dimension}</p>
								{/* Создаем список с персонажами, которые находятся в элементе, с помощью компонента ListGroup из библиотеки react-bootstrap */}
								<p>Персонажи:</p>
								<ListGroup>
									{/* Проходимся по массиву персонажей с помощью метода map и создаем элемент списка для каждого персонажа */}
									{data.residents.map((res) => (
										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу персонажа
										<ListGroup.Item key={res}>
											{/* Элемент списка содержит ссылку на детальную страницу персонажа с помощью компонента Link из библиотеки react-router-dom */}
											<Link to={`/characters/${res.split('/').pop()}`}>
												{/* Ссылка содержит имя персонажа, которое мы получаем с помощью функции getCharacterName */}
												{getCharacterName(res)}
											</Link>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
						)}
						{category === 'episodes' && (
							<div>
								<p>Дата выхода: {data.air_date}</p>
								<p>Номер эпизода: {data.episode}</p>
								{/* Создаем список с персонажами, которые участвовали в элементе, с помощью компонента ListGroup из библиотеки react-bootstrap */}
								<p>Персонажи:</p>
								<ListGroup>
									{/* Проходимся по массиву персонажей с помощью метода map и создаем элемент списка для каждого персонажа */}
									{data.characters.map((char) => (
										// Каждый элемент списка имеет уникальный ключ, который равен URL-адресу персонажа
										<ListGroup.Item key={char}>
											{/* Элемент списка содержит ссылку на детальную страницу персонажа с помощью компонента Link из библиотеки react-router-dom */}
											<Link to={`/characters/${char.split('/').pop()}`}>
												{/* Ссылка содержит имя персонажа, которое мы получаем с помощью функции getCharacterName */}
												{getCharacterName(char)}
											</Link>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
						)}
					</Card.Body>
				</Card>
			)}
		</div>
	)
}

// Экспортируем компонент для детальной страницы элемента
export default Detail
