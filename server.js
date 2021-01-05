const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect db
connectDB();

app.get('/', (req, res) => res.send('Jio KAKA'));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
