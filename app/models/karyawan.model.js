const sql = require('./db.js');

const Karyawan = function (karyawan) {
  this.nik = karyawan.nik;
  this.nama = karyawan.nama;
};

Karyawan.create = (newKaryawan, result) => {
  sql.query('Insert Into m_karyawan Set ?', newKaryawan, (err, res) => {
    if (err) {
      console.log('Error ', err);
      result(err, null);
      return;
    }

    console.log('Created karyawan: ', { nik: res.insertedNIK, ...newKaryawan });
    result(null, { nik: res.insertedNIK, ...newKaryawan });
  });
};

Karyawan.findById = (nik, result) => {
  sql.query(
    `Select NIK, nama from m_karyawan Where NIK = ${nik}`,
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log('found karyawan: ', res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({ kind: 'not_found' }, null);
    }
  );
};


Karyawan.getAll = (result) => {
  sql.query('SELECT NIK, nama FROM m_karyawan', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('karyawan: ', res);
    result(null, res);
  });
};
Karyawan.updateById = (nik, karyawan, result) => {
  sql.query(
    'UPDATE m_karyawan SET nama = ? WHERE NIK = ?',
    [karyawan.nama, nik],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found karyawan with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated karyawan: ', { nik: nik, ...karyawan });
      result(null, { nik: nik, ...karyawan });
    }
  );
};

Karyawan.remove = (nik, result) => {
  sql.query('DELETE FROM m_karyawan WHERE NIK = ?', nik, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Karyawan with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted karyawan with nik: ', nik);
    result(null, res);
  });
};

Karyawan.removeAll = (result) => {
  sql.query('DELETE FROM m_karyawan', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} karyawan`);
    result(null, res);
  });
};

module.exports = Karyawan;
