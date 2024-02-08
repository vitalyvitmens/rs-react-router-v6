import { useState, useEffect } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { Card, CardGroup, Spinner, Form, ListGroup } from 'react-bootstrap'
import axios from 'axios'
import Navigation from './Navigation'

export default function Category() {
	// Получаем параметры категории и сортировки из URL-адреса с помощью хука useSearchParams
	const [searchParams, setSearchParams] = useSearchParams()
	const {category} = useParams()
	const sort = searchParams.get('sort')

	// Создаем состояние для хранения данных и статуса загрузки с помощью хука useState
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	// Создаем эффект для получения данных из файла src\db.json с помощью хука useEffect
	useEffect(() => {
		// Импортируем файл src\db.json с помощью функции import
		import('../db.json')
			.then((json) => {
				// Если импорт успешен, находим нужный массив в файле по категории и сохраняем его в состояние
				const array = json[category]
				setData(array)
				// Меняем статус загрузки на false
				setLoading(false)
			})
			.catch((error) => {
				// Если импорт неудачен, выводим ошибку в консоль и меняем статус загрузки на false
				console.error(error)
				setLoading(false)
			})
	}, [category]) // Перезапускаем эффект при изменении категории

	// Создаем функцию для сортировки массива по дате создания
	const sortByCreated = (array, order) => {
		// Копируем массив, чтобы не мутировать исходный
		const copy = [...(array || [])]
		// Сортируем массив с помощью метода sort и функции сравнения
		copy.sort((a, b) => {
			// Преобразуем даты в миллисекунды с помощью функции Date.parse
			const dateA = Date.parse(a.created)
			const dateB = Date.parse(b.created)
			// Возвращаем разность между датами в зависимости от порядка сортировки
			if (order === 'ASC') {
				return dateA - dateB
			} else if (order === 'DESC') {
				return dateB - dateA
			} else {
				return 0
			}
		})
		// Возвращаем отсортированный массив
		return copy
	}

	// Создаем функцию для обработки изменения сортировки
	const handleChangeSort = (event) => {
		// Получаем значение сортировки из события
		const value = event.target.value
		// Устанавливаем параметр сортировки в URL-адресе с помощью хука setSearchParams
		setSearchParams({ sort: value })
	}

	// Возвращаем JSX-разметку, которая описывает, как выглядит наша страница категории
	return (
		<div className="Category">
			{/* Страница категории содержит навигационную панель */}
			<Navigation />
			{/* Страница категории содержит форму для выбора сортировки */}
			<Form>
				<Form.Group controlId="sortSelect">
					<Form.Label>Сортировать по дате создания:</Form.Label>
					<Form.Control
						as="select"
						value={sort || ''}
						onChange={handleChangeSort}
					>
						<option value="">Без сортировки</option>
						<option value="ASC">По возрастанию</option>
						<option value="DESC">По убыванию</option>
					</Form.Control>
				</Form.Group>
			</Form>
			{/* Страница категории выводит список элементов из данной категории */}
			{/* Проверяем, загружаются ли данные */}
			{loading ? (
				// Если да, то отображаем спиннер с помощью компонента Spinner из библиотеки react-bootstrap
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Загрузка...</span>
				</Spinner>
			) : (
				// Если нет, то отображаем список с данными с помощью компонента ListGroup из библиотеки react-bootstrap
				<ListGroup>
					{/* Проходимся по массиву данных с помощью метода map и создаем элемент списка для каждого элемента */}
					{/* Сортируем массив по дате создания в зависимости от параметра сортировки */}
					{sortByCreated(data, sort).map((item) => (
						// Каждый элемент списка имеет уникальный ключ, который равен id элемента
						<ListGroup.Item key={item.id}>
							{/* Элемент списка содержит ссылку на детальную страницу элемента с помощью компонента Link из библиотеки react-router-dom */}
							<Link to={`/${category}/${item.id}`}>{item.name}</Link>
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</div>
	)
}
