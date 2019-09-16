const csvFilePath = 'input/dadosUnidadesAfs.csv';
const csv = require('csvtojson');

const { geraArquivo } = require('./functions.js');
const { formataTelefones } = require('./functions.js');
const { formataPath } = require('./functions.js');

let unidades = [];

(async () => {
	await csv().fromFile(csvFilePath).then(
		(jsonObject) => {
				jsonObject.map( (data, i) => {
	
					let dataTelefones = data.Telefone.split(',');
	
					let unidade = {
						path: formataPath(data.Cidade, data.Bairro, i),
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
		}
	)
	await geraArquivo(unidades);
})();



