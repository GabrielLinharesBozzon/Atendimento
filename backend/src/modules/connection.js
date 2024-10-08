import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT, // Adiciona a porta separadamente
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default connection;
