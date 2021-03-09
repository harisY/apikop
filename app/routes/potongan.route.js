module.exports = (app) => {
  const potongan = require('../controllers/potongan.controller.js');

  app.get('/api/potongan/total/:noanggota/:tahun/:bulan', potongan.findTotal1);
  app.get('/api/potongan/detail/:noanggota/:jenis', potongan.findDetail1);
  app.get(
    '/api/potongan/sembako/:noanggota/:tahun/:bulan/:jenis',
    potongan.findDetailSembako
  );
  app.get(
    '/api/potongan/total/:noanggota/:tahun/:bulan/:jenis',
    potongan.totalPotonganByMonth
  );
  app.get('/api/potongan/:noanggota/:tahun/:bulan', potongan.getListPotongan);
  app.get('/api/potongan/:noanggota', potongan.getTotPotWajib);
};
