import './Container.css'
import { Botao } from './Botao'
import { useState } from 'react'
import { Adiciona } from './Adiciona'

export function Container() {
	const [counter, setCounter] = useState(0)
	const [operacoes, setOperacoes] = useState([
		{ operacao: '+', valor: 1 },
		{ operacao: '-', valor: 1 },
		{ operacao: '+', valor: 2 },
		{ operacao: '-', valor: 2 },
	])

	function alteraContador(operacao, valor) {
		if (operacao === '+') {
			setCounter((prevState) => prevState + valor)
		} else {
			setCounter((prevState) => prevState - valor)
		}
	}

	function adicionaOperacao(operacao, valor) {
		setOperacoes((prevState) => [...prevState, { operacao, valor }])
	}

	return (
		<>
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
			<Adiciona aoClicar={adicionaOperacao} />
		</>
	)
}
