let mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_express'
});

connection.connect((err) => {
  if (err) {
    console.log(err)
  };
  console.log('waw')
})

module.exports = connection