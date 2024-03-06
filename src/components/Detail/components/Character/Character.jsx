import { Link } from 'react-router-dom'
import { getEpisodeName } from '../../../../utils'

export const Character = ({ data }) => {
	return (
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
				<ul>
					{data.episode.map(
						(ep) =>
							ep && (
								<li key={ep}>
									<Link to={`/characters/${ep}`}>{getEpisodeName(ep)}</Link>
								</li>
							)
					)}
				</ul>
			)}
		</div>
	)
}
