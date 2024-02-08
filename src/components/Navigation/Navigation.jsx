import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/logo.jpg'
import styles from './Navigation.module.css'

export default function Navigation() {
	return (
		<Navbar bg="light" expand="lg" className={styles.Navigation}>
			<Navbar.Brand>
				<Link to="/">
					<img src={logo} alt="logo" width="70" height="70" style={{borderRadius: '50%'}}/>
				</Link>
			</Navbar.Brand>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className={styles.center}>
					<Link to="/characters">Герои</Link>
					<Link to="/locations">Локации</Link>
					<Link to="/episodes">Эпизоды</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
