import mysql from 'mysql';

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'test',
});

const connectDB = () => {
  con.connect(function (err: any) {
    if (err) {
      console.log('Error connecting to Db');
      console.log(err);
      return;
    }
    console.log('Connection established');
  });
};
export default connectDB;
