import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Spinner } from 'react-bootstrap'
import { getEpisodeName } from '../../utils/getEpisodeName'
import { getCharacterName } from '../../utils/getCharacterName'
import Navigation from '../Navigation/Navigation'
import styles from './Detail.module.css'

export default function Detail() {
	const { category, id } = useParams()
	console.log('####: category', category)
	console.log('####: id', id)

	const [data, setData] = useState({})
	console.log('####: data', data)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const json = await import('../../db.json')
				const item = json[category].find((item) => item.id === Number(id))
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
								<p>Место рождения: {data.origin.name}</p>
								<p>Текущее местоположение: {data.location.name}</p>
								<p>Эпизоды:</p>
								<ListGroup>
									{data.episode.map((ep) => (
										<ListGroup.Item key={ep}>
											<Link to={`/episodes/${ep.split('/').pop()}`}>
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
								<p>Персонажи:</p>
								<ListGroup>
									{data.residents.map((res) => (
										<ListGroup.Item key={res}>
											<Link to={`/characters/${res.split('/').pop()}`}>
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
								<p>Персонажи:</p>
								<ListGroup>
									{data.characters.map((char) => (
										<ListGroup.Item key={char}>
											{/* <Link to={`/characters/${char.split('/').pop()}`}> */}
											<Link to={`/${category}/${char.split('/').pop()}`}>
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
