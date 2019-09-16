const csvFilePath = 'input/teste.csv';
const csv = require('csvtojson');

csv().fromFile(csvFilePath).then(
	(jsonObject) => {
		console.log(jsonObject);
	}
)