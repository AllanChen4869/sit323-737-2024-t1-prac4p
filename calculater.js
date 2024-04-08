const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Addition endpoint
app.post('/api/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = Number(num1) + Number(num2);
    res.json({ result });
});

// Subtraction endpoint
app.post('/api/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = Number(num1) - Number(num2);
    res.json({ result });
});

// Multiplication endpoint
app.post('/api/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = Number(num1) * Number(num2);
    res.json({ result });
});

// Division endpoint
app.post('/api/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    if (Number(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }
    const result = Number(num1) / Number(num2);
    res.json({ result });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});