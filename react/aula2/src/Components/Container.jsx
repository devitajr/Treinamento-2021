import './Container.css'
import { Botao } from './Botao'
import { useContext, useState } from 'react'
import { Adiciona } from './Adiciona'
import { OperacoesContext } from './OperacoesContext'

export function Container() {
	const [counter, setCounter] = useState(0)
	const { operacoes } = useContext(OperacoesContext)
	// const [operacoes, setOperacoes] = useState([
	// 	{ operacao: '+', valor: 1 },
	// 	{ operacao: '-', valor: 1 },
	// 	{ operacao: '+', valor: 2 },
	// 	{ operacao: '-', valor: 2 },
	// ])

	// function adicionaOperacao(operacao, valor) {
	// 	setOperacoes((prevState) => [...prevState, { operacao, valor }])
	// }

	function alteraContador(operacao, valor) {
		if (operacao === '+') {
			setCounter((prevState) => prevState + valor)
		} else {
			setCounter((prevState) => prevState - valor)
		}
	}

	return (
		<div className="container">
			<div className="contador_container">
				<h1 className="contador">{counter}</h1>

				<div className="botoes">
					{operacoes.map((item, index) => (
						<Botao
							aoClicar={alteraContador}
							operacao={item.operacao}
							valor={item.valor}
							key={index}
						/>
					))}
				</div>
			</div>
			{/* <Adiciona aoClicar={adicionaOperacao} /> */}
			<Adiciona />
		</div>
	)
}
