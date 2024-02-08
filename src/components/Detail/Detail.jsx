import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Card, ListGroup, Spinner } from 'react-bootstrap'
import { getEpisodeName } from '../../utils/getEpisodeName'
import { getCharacterName } from '../../utils/getCharacterName'
import Navigation from '../Navigation/Navigation'
import { Button } from '../Button/Button'
import styles from './Detail.module.css'

export default function Detail() {
	const { category, id } = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)
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
								<p>Пол: {data.gender || 'нет'}</p>
								<p>Вид: {data.species || 'нет'}</p>
								<p>Статус: {data.status || 'нет'}</p>
								<p>Тип: {data.type || 'нет'}</p>
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
								<p>Тип: {data.type || 'нет'}</p>
								<p>Измерение: {data.dimension || 'нет'}</p>
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
								<p>Номер эпизода: {data.episode || 'нет'}</p>
								<p>Дата выхода: {data.air_date || 'нет'}</p>
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
			<Button onClick={() => navigate(-1)}>Вернуться назад к списку</Button>
		</div>
	)
}
