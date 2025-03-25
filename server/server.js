import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connection from './Db/connection.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = process.env.PORT || 5000;
connection();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/v1/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});