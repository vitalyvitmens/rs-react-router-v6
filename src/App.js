import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import { Button } from './components/Button/Button.jsx'
import Home from './components/Home.jsx'
import Category from './components/Category'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
import styles from './app.module.css'

export const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<h1>React Router V6</h1>
					<Container>
						<Navbar.Brand style={{ color: '#fff', fontSize: '2rem' }} href="/">
							Rick and Morty App
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<div
							style={{
								display: 'flex',
								gap: '10px',
								justifyContent: 'center',
							}}
						>
							<Link to="/characters">
								<Button>Герои</Button>
							</Link>
							<Link to="/locations">
								<Button>Локации</Button>
							</Link>
							<Link to="/episodes">
								<Button>Эпизоды</Button>
							</Link>
						</div>
					</Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<Category />} />
					<Route path="/:category/:id" element={<Detail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
