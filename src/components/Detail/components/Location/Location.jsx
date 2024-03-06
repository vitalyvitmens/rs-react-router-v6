import { Link } from 'react-router-dom'
import { getCharacterName } from '../../../../utils'

export const Location = ({ data }) => {
	return (
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
				<ul>
					{data.residents.map(
						(res) =>
							res && (
								<li key={res}>
									<Link to={`/locations/${res}`}>{getCharacterName(res)}</Link>
								</li>
							)
					)}
				</ul>
			)}
		</div>
	)
}
