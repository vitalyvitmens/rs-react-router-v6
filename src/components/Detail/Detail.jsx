import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ListGroup, Spinner } from 'react-bootstrap'
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
				<div className={styles.row}>
					{data.image && <img src={data.image} alt={data.name} />}
					<div className={styles.column}>
						<div className={styles.name}>{data.name}</div>
						<div className={styles.body}>
							{category === 'characters' && (
								<div>
									<p>
										<span>Пол: </span>
										{data.gender || 'нет'}
									</p>
									<p>
										<span>Вид: </span>
										{data.species || 'нет'}
									</p>
									<p>
										<span>Статус: </span>
										{data.status || 'нет'}
									</p>
									<p>
										<span>Тип: </span>
										{data.type || 'нет'}
									</p>
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
									<p>
										<span>Тип: </span>
										{data.type || 'нет'}
									</p>
									<p>
										<span>Измерение: </span>
										{data.dimension || 'нет'}
									</p>
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
									<p>
										<span>Номер эпизода: </span>
										{data.episode || 'нет'}
									</p>
									<p>
										<span>Дата выхода: </span>
										{data.air_date || 'нет'}
									</p>
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
						</div>
					</div>
				</div>
			)}
			<Button onClick={() => navigate(-1)}>Вернуться назад к списку</Button>
		</div>
	)
}
