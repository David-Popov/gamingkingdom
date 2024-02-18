// src/app.ts
import express, { Express, Request, Response } from 'express';
import connectDB from './config/db';

const app: Express = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript!');
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
