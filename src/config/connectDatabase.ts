import mysql from 'mysql';

export const SQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

const connectDB = () => {
  SQL.connect(function (err: any) {
    if (err) {
      console.log('Error connecting to Db');
      console.log(err);
      return;
    }
    console.log('Connection established');
  });
};
export default connectDB;

export const getUsers = async () => {
  try {
    SQL.query('SELECT * FROM users', (err, res) => {
      console.log('Query Done');
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};
