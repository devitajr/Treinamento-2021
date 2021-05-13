import './Adiciona.css'
import { useState } from 'react'

export function Adiciona(props) {
	const [novaOperacao, setNovaOperacao] = useState('')
	const [novoValor, setNovoValor] = useState(0)

	function handleButton() {
		setNovoValor(0)
		setNovaOperacao('')
		props.aoClicar(novaOperacao, novoValor)
	}

	return (
		<div className="novOperacao">
			<div className="inputs">
				<input
					type="text"
					placeholder="Nova Operacao"
					onChange={(event) => setNovaOperacao(event.target.value)}
					value={novaOperacao}
				/>
				<input
					type="number"
					placeholder="Novo Valor"
					onChange={(event) => setNovoValor(+event.target.value)}
					value={novoValor}
				/>
			</div>

			<button className="btn" onClick={handleButton}>
				Adicionar Novo Botão
			</button>
		</div>
	)
}
