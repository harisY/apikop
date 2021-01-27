const sql = require('./db.js');

const Potongan = function (potongan) {
  this.nik = potongan.nik;
  this.barang = potongan.barang;
  this.qty = potongan.qty;
  this.subtotal = potongan.subtotal;
};

Potongan.getTotalPotongan = (nik, result) => {
  sql.query(
    `SELECT sum(subtotal) total, nik FROM t_potongan Where nik=${nik} group by nik`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('potongan: ', res);
      result(null, res);
    }
  );
};

Potongan.getDetailPotongan = (nik, result) => {
  sql.query(
    `SELECT barang, nik, subtotal, qty FROM t_potongan Where nik = ${nik}`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('potongan: ', res);
      result(null, res);
    }
  );
};
module.exports = Potongan;
