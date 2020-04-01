const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, (err, client) => {
  if (err) {
    console.log('Ocorreu um erro!')
  } else {
    client.consultaCEP({ cep: '58890000' }, (err, res) => {
      if (err) {
        console.log('Ocorreu um erro!')
      } else {
      console.log(res);
      }
    });
  }
});