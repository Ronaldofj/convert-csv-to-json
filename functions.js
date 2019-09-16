const fs = require("fs")

// function que formata o telefone
function formataTelefones(telefonesBrutos) {
	let telefones = [];

	telefonesBrutos.map((telefone, i) => {
		telefones.push({
				tipo: telefone.length > 15 ? 'celular' : 'fixo',
				numero: telefone,
				whatsapp: telefone.length > 15 ? true : false,
			}
		)
	})

	return telefones;
}

function geraArquivo(dados) {

}

module.exports = {
	formataTelefones,
	geraArquivo
}