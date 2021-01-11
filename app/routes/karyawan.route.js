module.exports = (app) => {
  const karyawan = require('../controllers/karyawan.controller.js');

  app.post('/api/karyawan', karyawan.create);
  app.get('/api/karyawan', karyawan.findAll);
  app.get('/api/karyawan/:nik', karyawan.findOne);
  app.put('/api/karyawan/:nik', karyawan.update);
  app.delete('/api/karyawan/:nik', karyawan.delete);
  app.delete('/api/karyawan', karyawan.deleteAll);
};
