import './App.css'
import { Container } from './Components/Container'
import { Navbar } from './Components/Navbar'
import { OperacoesProvider } from './Components/OperacoesContext'
import { BrowserRouter, Route } from 'react-router-dom'
import { Pagina1 } from './Components/Pagina1'
import { Pagina2 } from './Components/Pagina2'

function App() {
	return (
		<OperacoesProvider>
			<BrowserRouter>
				<Navbar />
				<Route path="/contador" component={Container} />
				<Route path="/pagina1" component={Pagina1} />
				<Route path="/pagina2" component={Pagina2} />
			</BrowserRouter>
		</OperacoesProvider>
	)
}

export default App
