import { getDatabase } from './db.js';
import express from 'express';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.MYSQL_PASSWORD || process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
};

const dbDriver = process.env.DB_DRIVER;
const PORT = 8080;

const pool = await getDatabase(dbDriver, config);

function getIps() {
    const interfaces = os.networkInterfaces();
    const ips = [];
    for (const iface of Object.values(interfaces)) {
        for (const details of iface || []) {
            if (details.family === 'IPv4' && !details.internal) {
                ips.push(details.address);
            }
        }
    }
    return ips;
}

app.get('/api/config', (_, res) => {
    res.json({
        hostname: os.hostname(),
        ips: getIps(),
        dbDriver: dbDriver,
        port: config.port
    })
})

app.get('/api/student-record', async (_, res) => {
    try {
        const result = await pool.req();
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Помилка з\'єднання з базою даних' })
    }
});

app.listen(PORT, '0.0.0.0');