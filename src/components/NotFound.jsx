import { Link } from 'react-router-dom'
import Navigation from './Navigation'

export default function NotFound() {
	return (
		<div className="NotFound">
			<Navigation />
			<h1>Страница не найдена</h1>
			<p>Извините, но запрашиваемая вами страница не существует.</p>
			<p>
				Пожалуйста, проверьте правильность введенного адреса или перейдите на
				главную страницу.
			</p>
			<Link to="/">Перейти на главную страницу</Link>
		</div>
	)
}
