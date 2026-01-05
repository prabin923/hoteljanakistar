import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
    res.send('Janakistar Hotel API is running');
});

// Proxy or direct API for EmailJS if needed, 
// though EmailJS is typically used client-side.
// We'll keep this as a shell for any future backend logic.
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Received contact request:', { name, email, subject });

    // Here you can add logic to log to a database or perform other backend tasks
    res.status(200).json({ status: 'success', message: 'Message received on server' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
