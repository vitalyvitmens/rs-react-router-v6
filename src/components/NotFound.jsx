import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function NotFound() {
	return (
		<div className="NotFound">
			<Container>
				<Row>
					<Col xs={12}>
						<h1>Страница не найдена</h1>
						<p>К сожалению, мы не можем найти страницу, которую вы ищете.</p>
						<Button variant="primary">
							<Link to="/">Вернуться на главную</Link>
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
