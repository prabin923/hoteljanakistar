import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailjs from '@emailjs/nodejs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure EmailJS
// Configure EmailJS
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

console.log('EmailJS Backend Config Loaded:', {
    service: !!EMAILJS_SERVICE_ID,
    template: !!EMAILJS_TEMPLATE_ID,
    public: !!EMAILJS_PUBLIC_KEY,
    private: !!EMAILJS_PRIVATE_KEY
});

// Basic health check
app.get('/', (req, res) => {
    res.send('Janakistar Hotel API is running with EmailJS');
});

// Generic email sender helper
const sendEmail = async (templateId, templateParams) => {
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        templateId,
        templateParams,
        {
            publicKey: EMAILJS_PUBLIC_KEY,
            privateKey: EMAILJS_PRIVATE_KEY,
        }
    );
};

// Booking endpoint
app.post('/api/booking', async (req, res) => {
    console.log('Received booking request:', req.body);
    try {
        await sendEmail(EMAILJS_TEMPLATE_ID, req.body);
        res.status(200).json({ status: 'success', message: 'Booking inquiry sent via EmailJS' });
    } catch (error) {
        console.error('EmailJS Booking Error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send booking inquiry', details: error.message });
    }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    console.log('Received contact request:', req.body);
    try {
        await sendEmail(EMAILJS_TEMPLATE_ID, req.body);
        res.status(200).json({ status: 'success', message: 'Contact message sent via EmailJS' });
    } catch (error) {
        console.error('EmailJS Contact Error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send message', details: error.message });
    }
});

// Event inquiry endpoint
app.post('/api/event', async (req, res) => {
    console.log('Received event inquiry:', req.body);
    try {
        await sendEmail(EMAILJS_TEMPLATE_ID, req.body);
        res.status(200).json({ status: 'success', message: 'Event inquiry sent via EmailJS' });
    } catch (error) {
        console.error('EmailJS Event Error:', error);
        res.status(500).json({ status: 'error', message: 'Failed to send event inquiry', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
