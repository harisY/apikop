const sql = require('./db.js');

const Potongan = function (potongan) {
  this.nik = potongan.nik;
  this.barang = potongan.barang;
  this.qty = potongan.qty;
  this.subtotal = potongan.subtotal;
};

Potongan.getTotalPotongan = (nik, result) => {
  sql.query(
    `SELECT IFNULL(sum(subtotal),0) total, nik FROM t_potongan Where nik=${nik} group by nik`,
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

Potongan.getTotalPotonganWajib = (noanggota, result) => {
  sql.query(
    `SELECT IFNULL(totalSimpanan,0) total FROM simpananwajib Where noanggota=${noanggota}`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('Tot Potongan Wajib: ', res);
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

Potongan.getDetailPotongan1 = (noanggota, jenis, result) => {
  sql.query(
    `select * from pinjamsimpan 
    where noanggota = ${noanggota} and jenis_potongan ='${jenis}'`,
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
Potongan.getDetailPotonganSembako = (
  noanggota,
  tahun,
  bulan,
  jenis,
  result
) => {
  sql.query(
    `select * from sembakowarung 
    where noanggota = ${noanggota} and year(tgl)=${tahun} and month(tgl)=${bulan} and jenis ='${jenis}'`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      console.log('potongan warung: ', res);
      result(null, res);
    }
  );
};

Potongan.getTotalPotongan1 = (noanggota, tahun, bulan, result) => {
  sql.query(
    `Select sum(jumlah) total from pinjamsimpan 
    Where noanggota = ${noanggota} and tahun=${tahun} and bulan=${bulan}`,
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

Potongan.getTotalPotonganByMonth = (noanggota, tahun, bulan, jenis, result) => {
  sql.query(
    `Select IFNULL(SUM(jumlah),0) total from pinjamsimpan 
    Where noanggota = ${noanggota} and tahun=${tahun} and bulan=${bulan} and jenis_potongan='${jenis}'`,
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

Potongan.listPotongan = (noanggota, tahun, bulan, result) => {
  sql.query(
    `select jenis_potongan jenis, sum(jumlah) total, tipe from pinjamsimpan
    Where noanggota = ${noanggota} and tahun=${tahun} and bulan=${bulan}
    group by jenis_potongan, tipe
    union all 
    select jenis, sum(subtotal) total, 2 tipe from sembakowarung
    where noanggota = ${noanggota} and year(tgl)=${tahun} and month(tgl)=${bulan}
    group by jenis, tipe`,
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
