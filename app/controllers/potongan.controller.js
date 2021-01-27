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
