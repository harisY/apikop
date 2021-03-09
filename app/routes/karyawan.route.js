module.exports = (app) => {
  const karyawan = require('../controllers/karyawan.controller.js');

  app.post('/api/karyawan', karyawan.create);
  app.get('/api/karyawan', karyawan.findAll);
  app.get('/api/karyawan/:noanggota', karyawan.findOne);
  app.put('/api/karyawan/:noanggota', karyawan.update);
  app.delete('/api/karyawan/:noanggota', karyawan.delete);
  app.delete('/api/karyawan', karyawan.deleteAll);
  app.get('/api/karyawan/:noanggota/:pwd', karyawan.loginSesison);
};
