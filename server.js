const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to API v.1' });
});

require('./app/routes/karyawan.route.js')(app);
require('./app/routes/potongan.route.js')(app);
app.listen(3001, () => {
  console.log(`Server started on port 3001`);
});
