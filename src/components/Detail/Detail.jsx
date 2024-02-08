import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, ListGroup, Spinner } from 'react-bootstrap'
import { getEpisodeName } from '../../utils/getEpisodeName'
import { getCharacterName } from '../../utils/getCharacterName'
import Navigation from '../Navigation/Navigation'
import styles from './Detail.module.css'

export default function Detail() {
	const { category, id } = useParams()

	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)
	console.log('####: category', category)
	console.log('####: data', data)

	useEffect(() => {
		async function fetchData() {
			try {
				const json = await import('../../db.json')
				const item = json[category]
					? json[category].find((item) => item.id === Number(id))
					: null
				setData(item)
				setLoading(false)
			} catch (error) {
				console.error(error)
				setLoading(false)
			}
		}

		fetchData()
	}, [category, id])

	return (
		<div className={styles.Detail}>
			<Navigation />
			{!data || loading ? (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Загрузка...</span>
				</Spinner>
			) : (
				<Card>
					{data.image && <Card.Img variant="top" src={data.image} />}
					<Card.Header>{data.name}</Card.Header>
					<Card.Body>
						{category === 'characters' && (
							<div>
								<p>Статус: {data.status}</p>
								<p>Вид: {data.species}</p>
								<p>Тип: {data.type || 'нет'}</p>
								<p>Пол: {data.gender}</p>
								<p>
									Место рождения:{' '}
									{data.origin ? data.origin.name : 'неизвестно'}
								</p>
								<p>
									Текущее местоположение:{' '}
									{data.location ? data.location.name : 'неизвестно'}
								</p>
								<p>Эпизоды:</p>
								{data.episode && data.episode.length > 0 && (
									<ListGroup>
										{data.episode.map(
											(ep) =>
												ep && (
													<ListGroup.Item key={ep}>
														<Link to={`/${category}/${ep}`}>
															{getEpisodeName(ep)}
														</Link>
													</ListGroup.Item>
												)
										)}
									</ListGroup>
								)}
							</div>
						)}
						{category === 'locations' && (
							<div>
								<p>Тип: {data.type}</p>
								<p>Измерение: {data.dimension}</p>
								<p>Персонажи:</p>
								{data.residents && data.residents.length > 0 && (
									<ListGroup>
										{data.residents.map(
											(res) =>
												res && (
													<ListGroup.Item key={res}>
														<Link to={`/${category}/${res}`}>
															{getCharacterName(res)}
														</Link>
													</ListGroup.Item>
												)
										)}
									</ListGroup>
								)}
							</div>
						)}
						{category === 'episodes' && (
							<div>
								<p>Дата выхода: {data.air_date}</p>
								<p>Номер эпизода: {data.episode}</p>
								<p>Персонажи:</p>
								{data.characters && data.characters.length > 0 && (
									<ListGroup>
										{data.characters.map(
											(char) =>
												char && (
													<ListGroup.Item key={char}>
														<Link to={`/${category}/${char}`}>
															{getCharacterName(char)}
														</Link>
													</ListGroup.Item>
												)
										)}
									</ListGroup>
								)}
							</div>
						)}
					</Card.Body>
				</Card>
			)}
		</div>
	)
}
