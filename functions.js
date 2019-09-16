const fs = require("fs").promises;

function formataPath(cidade, bairro, index) {
	const cidadeBairro = `${cidade}${bairro !== '' ? "-" + bairro : cidade === "São Paulo" ? "-" + index : ""}`

	const pathSemAcento = cidadeBairro.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	const pathSemEspaco = pathSemAcento.split(' ').join('-');

	return pathSemEspaco.toLowerCase();
}

function formataTelefones(telefonesBrutos) {
	let telefones = [];

	telefonesBrutos.map((telefone, i) => {

		if(telefone === 'null') {
			return false;
		}

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
	fs.writeFile("output/unidades.json", JSON.stringify(dados, null, 2));
}

module.exports = {
	formataTelefones,
	geraArquivo,
	formataPath
}