import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export function Navbar() {
	return (
		<header className={styles.container}>
			<div className={styles.logo}>Aula React 2</div>
			<nav className={styles.navbar}>
				<NavLink to="/contador" activeClassName={styles.active}>
					<a className={styles.ancora}>Contador</a>
				</NavLink>
				<NavLink to="/pagina1" activeClassName={styles.active}>
					<a className={styles.ancora}>Página 1</a>
				</NavLink>
				<NavLink to="pagina2" activeClassName={styles.active}>
					<a className={styles.ancora}>Página 2</a>
				</NavLink>
			</nav>
		</header>
	)
}
