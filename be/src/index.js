import cors from 'cors';
import YAML from 'yamljs';
import dotenv from "dotenv";
import express from 'express';
// import userRoutes from './routes/user.js';
// import authRoutes from './routes/auth.js';
// import incomeSourceRoutes from './routes/incomeSource.js';
// import expensesRoutes from './routes/expenses.js';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET not set in .env");
  process.exit(1);
}

const swaggerDoc = YAML.load('./src/swagger.yaml');

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/api/users', userRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/income-source', incomeSourceRoutes);
// app.use('/api/expenses', expensesRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(5000, () => {
  console.log('Backend running → http://localhost:5000');
  console.log('Swagger → http://localhost:5000/');
});