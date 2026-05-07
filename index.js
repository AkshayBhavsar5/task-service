import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Render injects its own PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// Routes
app.use('/api/tasks', taskRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
