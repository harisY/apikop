const Potongan = require('../models/potongan.model');

exports.findDetail = (req, res) => {
  Potongan.getDetailPotongan(req.params.nik, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Data id ${req.params.nik} tidak ditemukan.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Potongan with id ' + req.params.nik,
        });
      }
    } else res.send(data);
  });
};

exports.findTotal = (req, res) => {
  Potongan.getTotalPotongan(req.params.nik, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Data id ${req.params.nik} tidak ditemukan.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Potongan with id ' + req.params.nik,
        });
      }
    } else res.send(data);
  });
};

exports.findTotal1 = (req, res) => {
  Potongan.getTotalPotongan1(
    req.params.noanggota,
    req.params.tahun,
    req.params.bulan,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Data id ${req.params.noanggota} tidak ditemukan.`,
          });
        } else {
          res.status(500).send({
            message:
              'Error retrieving Potongan with No Anggota ' +
              req.params.noanggota,
          });
        }
      } else res.send(data);
    }
  );
};
exports.findDetail1 = (req, res) => {
  Potongan.getDetailPotongan1(
    req.params.noanggota,
    req.params.jenis,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Data id ${req.params.noanggota} tidak ditemukan.`,
          });
        } else {
          res.status(500).send({
            message:
              'Error retrieving Potongan with No Anggota ' +
              req.params.noanggota,
          });
        }
      } else res.send(data);
    }
  );
};

exports.findDetailSembako = (req, res) => {
  Potongan.getDetailPotonganSembako(
    req.params.noanggota,
    req.params.tahun,
    req.params.bulan,
    req.params.jenis,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Data id ${req.params.noanggota} tidak ditemukan.`,
          });
        } else {
          res.status(500).send({
            message: 'Error retrieving Sembako with id ' + req.params.noanggota,
          });
        }
      } else res.send(data);
    }
  );
};

exports.totalPotonganByMonth = (req, res) => {
  Potongan.getTotalPotonganByMonth(
    req.params.noanggota,
    req.params.tahun,
    req.params.bulan,
    req.params.jenis,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `Data id ${req.params.noanggota} tidak ditemukan.`,
          });
        } else {
          res.status(500).send({
            message:
              'Error retrieving Potongan with id ' + req.params.noanggota,
          });
        }
      } else res.send(data);
    }
  );
};
exports.getListPotongan = (req, res) => {
  Potongan.listPotongan(
    req.params.noanggota,
    req.params.tahun,
    req.params.bulan,
    (err, data) => {
      if (err) {
        if (err.kind === 'not_found') {
          res.status(404).send({
            message: `List potongan tidak ditemukan.`,
          });
        } else {
          res.status(500).send({
            message: 'Error get list potongan.',
          });
        }
      } else res.send(data);
    }
  );
};

exports.getTotPotWajib = (req, res) => {
  Potongan.getTotalPotonganWajib(req.params.noanggota, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Data id ${req.params.noanggota} tidak ditemukan.`,
        });
      } else {
        res.status(500).send({
          message:
            'Error retrieving Potongan Wajib with No Anggota ' +
            req.params.noanggota,
        });
      }
    } else res.send(data);
  });
};
