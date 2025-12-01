import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import cvRoutes from './routes/cv.routes';
import analysisRoutes from './routes/analysis.routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/cv', cvRoutes);
app.use('/analysis', analysisRoutes);

export default app;