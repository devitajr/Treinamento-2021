import './Botao.css'

export function Botao(props) {
	let classe
	props.operacao === '+' ? (classe = 'somar') : (classe = 'subtrair')
	return (
		<div className={`botao ${classe}`}>
			<div>{classe}</div>
			<div className="numero" onClick={() => props.aoClicar(props.operacao, +props.valor)}>
				{props.valor}
			</div>
		</div>
	)
}
