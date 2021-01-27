module.exports = (app) => {
  const potongan = require('../controllers/potongan.controller.js');

  app.get('/api/potongan/total/:nik', potongan.findTotal);
  app.get('/api/potongan/detail/:nik', potongan.findDetail);
};
