const Karyawan = require('../models/karyawan.model.js');

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty',
    });
  }
  const karyawan = new Karyawan({
    nik: req.body.nik,
    nama: req.body.nama,
  });

  Karyawan.create(karyawan, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occured while creating Karyawan.',
      });
    } else {
      res.send(data);
    }
  });
};

// Retrieve all Karyawan from the database.
exports.findAll = (req, res) => {
  Karyawan.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving karyawan.',
      });
    else res.send(data);
  });
};

// Find a single Karyawan with a NIK
exports.findOne = (req, res) => {
  Karyawan.findById(req.params.nik, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Karyawan with id ${req.params.nik}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error retrieving Karyawan with id ' + req.params.nik,
        });
      }
    } else res.send(data);
  });
};

// Update a Karyawan identified by the Karyawan in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  Karyawan.updateById(req.params.nik, new Karyawan(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Karyawan with id ${req.params.nik}.`,
        });
      } else {
        res.status(500).send({
          message: 'Error updating Karyawan with nik ' + req.params.nik,
        });
      }
    } else res.send(data);
  });
};

// Delete a Karyawan with the specified NIK in the request
exports.delete = (req, res) => {
  Karyawan.remove(req.params.nik, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Karyawan with nik ${req.params.nik}.`,
        });
      } else {
        res.status(500).send({
          message: 'Could not delete Karyawan with nik ' + req.params.nik,
        });
      }
    } else res.send({ message: `Karyawan was deleted successfully!` });
  });
};

// Delete all Karyawan from the database.
exports.deleteAll = (req, res) => {
  Karyawan.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Karyawan.',
      });
    else res.send({ message: `All Karyawan were deleted successfully!` });
  });
};
