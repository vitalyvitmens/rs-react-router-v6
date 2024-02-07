import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
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
				<Navbar bg="dark" variant="dark" expand="lg">
					<Container>
						<Navbar.Brand style={{ color: '#fff', fontSize: '2rem' }} href="/">
							Rick and Morty App
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link
									style={{
										color: 'pink',
										fontSize: '2rem',
										marginRight: '50px',
									}}
									href="/characters"
								>
									Герои
								</Nav.Link>
								<Nav.Link
									style={{
										color: 'pink',
										fontSize: '2rem',
										marginRight: '50px',
									}}
									href="/locations"
								>
									Локации
								</Nav.Link>
								<Nav.Link
									style={{
										color: 'pink',
										fontSize: '2rem',
										marginRight: '50px',
									}}
									href="/episodes"
								>
									Эпизоды
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
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
