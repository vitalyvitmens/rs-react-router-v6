import { useEffect, useState } from 'react'
import { Link, useSearchParams, useParams } from 'react-router-dom'
import { Spinner, Form } from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import styles from './Category.module.css'

export default function Category() {
	const [searchParams, setSearchParams] = useSearchParams()
	const { category } = useParams()
	const sort = searchParams.get('sort')
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const json = await import('../../db.json')
				const array = json[category]
				setData(array)
				setLoading(false)
			} catch (error) {
				console.error(error)
				setLoading(false)
			}
		}

		fetchData()
	}, [category])

	const sortByCreated = (array, order) => {
		const copy = [...(array || [])]
		copy.sort((a, b) => {
			const dateA = Date.parse(a.created)
			const dateB = Date.parse(b.created)
			if (order === 'ASC') {
				return dateA - dateB
			} else if (order === 'DESC') {
				return dateB - dateA
			} else {
				return 0
			}
		})
		return copy
	}

	const handleChangeSort = (event) => {
		const value = event.target.value
		setSearchParams({ sort: value })
	}

	return (
		<div className={styles.Category}>
			<Navigation />
			<form>
				<label htmlFor="select">Сортировать по дате создания:</label>
				<Form.Control
					id="select"
					name="select"
					as="select"
					value={sort || ''}
					onChange={handleChangeSort}
				>
					<option value="">Без сортировки</option>
					<option value="ASC">По возрастанию</option>
					<option value="DESC">По убыванию</option>
				</Form.Control>
			</form>
			{!data || loading ? (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Загрузка...</span>
				</Spinner>
			) : (
				<ul>
					{sortByCreated(data, sort).map((item) => (
						<li key={item.id}>
							<Link to={`/${category}/${item.id}`}>{item.name}</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
