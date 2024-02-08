import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardGroup, Spinner } from 'react-bootstrap'
import axios from 'axios'

export default function Category() {
	const { category } = useParams()
	console.log('####: category', category)

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let url = `http://localhost:3005/${category}`

		axios
			.get(url)
			.then((response) => {
				setData(response.data)
				setLoading(false)
			})
			.catch((error) => {
				console.error(error)
				setLoading(false)
			})
	}, [category])

	return (
		<div className="Category">
			{loading ? (
				<Spinner animation="border" role="status">
					<span
						className="visually-hidden"
						style={{ fontSize: '3rem', fontWeight: 600 }}
					>
						Загрузка...
					</span>
				</Spinner>
			) : (
				<CardGroup>
					{data.map((item) => (
						<Card key={item.id}>
							{item.image && <Card.Img variant="top" src={item.image} />}
							<Card.Header>
								<Link
									style={{ fontSize: '' }}
									to={`/${item.id}`}
								>
									{item.name}
								</Link>
							</Card.Header>
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
										<p>Номер эпизода: {item.episode}</p>
										<p>Дата выхода: {item.air_date}</p>
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
