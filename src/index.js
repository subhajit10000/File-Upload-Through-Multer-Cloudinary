const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);

const router = require('./routes/file.router.js');
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//routes
app.use('/api/files', router);




const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`✅ Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
startServer();