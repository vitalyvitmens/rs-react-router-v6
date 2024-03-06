import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Navigation, NotFound } from '../index'
import { Character } from './components/Character/Character'
import { Location } from './components/Location/Location'
import { Episode } from './components/Episode/Episode'
import { Image } from '../../components/common/Image'
import styles from './Detail.module.css'

export const Detail = () => {
	const { category, id } = useParams()
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

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

	const handleGoBack = () => navigate(-1)

	if (!data && !loading) {
		return <NotFound />
	}

	if (!data || loading) {
		return <span>Загрузка...</span>
	}

	return (
		<div className={styles.Detail}>
			<Navigation />
			<div className={styles.row}>
				{data.image && <Image src={data.image} alt={data.name} />}
				<div className={styles.column}>
					<div className={styles.name}>{data.name}</div>
					<div className={styles.body}>
						{category === 'characters' && <Character data={data} />}
						{category === 'locations' && <Location data={data} />}
						{category === 'episodes' && <Episode data={data} />}
					</div>
				</div>
			</div>

			<Button onClick={handleGoBack}>Вернуться назад к списку</Button>
		</div>
	)
}
