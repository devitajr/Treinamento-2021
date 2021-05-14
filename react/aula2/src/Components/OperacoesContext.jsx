import { useState, createContext } from 'react'

export const OperacoesContext = createContext({})

export function OperacoesProvider(props) {
	const [operacoes, setOperacoes] = useState([
		{ operacao: '+', valor: 1 },
		{ operacao: '-', valor: 1 },
		{ operacao: '+', valor: 2 },
		{ operacao: '-', valor: 2 },
	])

	function adicionaOperacao(operacao, valor) {
		setOperacoes((prevState) => [...prevState, { operacao, valor }])
	}

	return (
		<OperacoesContext.Provider value={{ operacoes, adicionaOperacao }}>
			{props.children}
		</OperacoesContext.Provider>
	)
}
