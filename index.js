const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

app.get('/', (req, res) => {
    res.send('Welcome to our Multi-Route Express Server!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page. Learn more about us here.');
})

app.get('/contact', (req, res) => {
    res.send('Contact us at: xyz@example.com');
})

app.get('/services', (req, res) => {
    res.json({
        services: ['Web Development', 'UI/UX Design', 'API Integration', 'Cloud Deployment']
    });
});