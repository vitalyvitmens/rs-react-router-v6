import { Link } from 'react-router-dom'
import { getCharacterName } from '../../../../utils'

export const Episode = ({ data }) => {
	return (
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
				<ul>
					{data.characters.map(
						(char) =>
							char && (
								<li key={char}>
									<Link to={`/episodes/${char}`}>{getCharacterName(char)}</Link>
								</li>
							)
					)}
				</ul>
			)}
		</div>
	)
}
