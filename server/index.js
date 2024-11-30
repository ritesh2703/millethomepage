// Import the Express module
import express from 'express'
import connectDB from './DB/connection.js'
import MilletWebsiteRoute from './routes/MilletWebsiteRoute.js';

// Initialize the Express application
const app = express();
app.use(express.json());

connectDB();

// Define the port the server will listen on
const PORT = 5000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/millet-websites', MilletWebsiteRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
