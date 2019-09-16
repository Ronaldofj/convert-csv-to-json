const csvFilePath = 'input/teste-unidades.csv';
const csv = require('csvtojson');

let unidades = [];

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

csv().fromFile(csvFilePath).then(
	(jsonObject) => {
			jsonObject.map( (data) => {

				let dataTelefones = data.Telefone.split(',');

				let unidade = {
					path: data.Cidade.toLowerCase(),
					nome: data.NomeFantasia,
					email: "",
					status: data.Status,
					inauguracao: data.Inauguracao,
					inauguracao_prevista: data.InauguracaoPrevista,
					endereco: {
						logradouro: data.Endereco,
						bairro: data.Bairro,
						complemento: data.Complemento,
						cep: data.Cep,
						cidade: data.Cidade,
						uf: data.Estado
					},
					telefones: formataTelefones(dataTelefones),
					link_balcao_online: "",
					redes_sociais: {
						instagram: "",
						facebook: ""
					}
				};

				unidades.push(unidade);
			})

			console.log(unidades);
	}
)