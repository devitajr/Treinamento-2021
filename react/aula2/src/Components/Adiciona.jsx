import styles from './Adiciona.module.css'
import { useContext, useState } from 'react'
import { OperacoesContext } from './OperacoesContext'

export function Adiciona() {
	const [novaOperacao, setNovaOperacao] = useState('')
	const [novoValor, setNovoValor] = useState(0)

	const { adicionaOperacao } = useContext(OperacoesContext)

	function handleButton() {
		setNovoValor(0)
		setNovaOperacao('')
		// props.aoClicar(novaOperacao, novoValor)
		adicionaOperacao(novaOperacao, novoValor)
	}

	return (
		<div className={styles.novaOperacao}>
			<div className={styles.inputs}>
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

			<button className={styles.btn} onClick={handleButton}>
				Adicionar Novo Botão
			</button>
		</div>
	)
}
