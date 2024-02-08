import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand>
				<Link to="/">
					<img src="logo.png" alt="logo" width="50" height="50" />
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/characters">Герои</Link>
					<Link to="/locations">Локации</Link>
					<Link to="/episodes">Эпизоды</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
