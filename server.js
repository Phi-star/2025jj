const express = require('express');
const path = require('path');
const { makeWASocket } = require('@whiskeysockets/baileys');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// WhatsApp session storage
const sessions = new Map();

// API endpoint for pairing
app.post('/api/pair', async (req, res) => {
    const { phoneNumber } = req.body;
    
    try {
        const socket = makeWASocket({
            printQRInTerminal: false,
            auth: {
                creds: null,
                keys: null
            }
        });

        const pairingCode = await socket.requestPairingCode(phoneNumber);
        const formattedCode = pairingCode.match(/.{1,4}/g).join('-');

        // Store the socket for later use
        sessions.set(phoneNumber, socket);

        res.json({
            success: true,
            pairingCode: formattedCode
        });

    } catch (error) {
        console.error('Pairing error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// API endpoint to check connection status
app.get('/api/status/:phoneNumber', async (req, res) => {
    const { phoneNumber } = req.params;
    const socket = sessions.get(phoneNumber);

    if (!socket) {
        return res.status(404).json({ error: 'Session not found' });
    }

    res.json({
        connected: socket.authState.creds.registered,
        sessionId: socket.authState.creds.registered ? JSON.stringify(socket.authState.creds) : null
    });
});

// All other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
