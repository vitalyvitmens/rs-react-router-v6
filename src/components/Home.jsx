import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { useFetch } from '../Hooks/useFetch'

export default function Home() {
	const { data, error, loading } = useFetch('http://localhost:3005/episodes')

	return loading ? (
		<div style={{ fontSize: '5rem' }}>Loading...</div>
	) : (
		<Container>
			<h2>Добро пожаловать в Rick and Morty App!</h2>
			<p>
				Это интерактивное приложение, которое позволяет тебе узнать больше о
				персонажах, локациях и эпизодах из популярного мультсериала Рик и Морти.
			</p>
			<p>
				Выбери категорию, которая тебя интересует, и начни свое приключение в
				мультивселенной!
			</p>
			{data &&
				data.map(({ id, name, air_date, episode, created }) => (
					<ul
						style={{
							display: 'flex',
							// margin: 'auto',
							// width: '100%',
							textAlign: 'start',
							background: 'black',
							color: '#fff',
							justifyContent: 'space-between',
							justifyItems: 'space-between',
						}}
						key={id}
					>
						<li>
							{id} {name} {air_date} {episode} {created.slice(0, 10)}
						</li>
					</ul>
				))}
		</Container>
	)
}
