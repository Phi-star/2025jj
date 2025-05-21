// WhatsApp pairing functionality
let currentPhoneNumber = null;
let checkInterval = null;

// Visual effects functions remain the same
function createBubbles() { /* ... */ }
function createParticles() { /* ... */ }
function setCurrentYear() { /* ... */ }
function copyToClipboard(text, elementId) { /* ... */ }

async function startPairing(phoneNumber) {
    try {
        document.getElementById('status-message').textContent = 'Connecting to WhatsApp...';
        currentPhoneNumber = phoneNumber;

        // Show QR card
        document.getElementById('input-card').classList.add('hidden');
        document.getElementById('qr-card').classList.remove('hidden');

        // Call backend to start pairing
        const response = await fetch('/api/pair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phoneNumber })
        });

        const data = await response.json();

        if (data.success) {
            document.getElementById('pairing-code').textContent = data.pairingCode;
            document.getElementById('status-message').textContent = 'Enter this code in WhatsApp on your phone';

            // Start checking connection status
            checkInterval = setInterval(checkConnectionStatus, 3000);
        } else {
            throw new Error(data.error || 'Failed to start pairing');
        }
    } catch (error) {
        console.error('Pairing error:', error);
        document.getElementById('status-message').textContent = `Error: ${error.message}`;
    }
}

async function checkConnectionStatus() {
    try {
        const response = await fetch(`/api/status/${currentPhoneNumber}`);
        const data = await response.json();

        if (data.connected) {
            clearInterval(checkInterval);
            document.getElementById('status-message').textContent = 'Connected to WhatsApp!';
            document.getElementById('session-id').textContent = data.sessionId;
            
            document.getElementById('qr-card').classList.add('hidden');
            document.getElementById('session-card').classList.remove('hidden');
        }
    } catch (error) {
        console.error('Status check error:', error);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    createParticles();
    setCurrentYear();
    
    // Pair button click handler
    document.getElementById('pair-btn').addEventListener('click', async () => {
        const phoneNumber = document.getElementById('phone-number').value.trim();
        
        if (phoneNumber && /^\d+$/.test(phoneNumber)) {
            await startPairing(phoneNumber);
        } else {
            alert('Please enter a valid phone number (digits only, no spaces)');
        }
    });
    
    // Copy buttons and other event listeners remain the same
    document.getElementById('copy-code-btn').addEventListener('click', () => {
        const code = document.getElementById('pairing-code').textContent;
        copyToClipboard(code.replace(/-/g, ''), 'copy-code-btn');
    });
    
    document.getElementById('copy-session-btn').addEventListener('click', () => {
        const sessionId = document.getElementById('session-id').textContent;
        copyToClipboard(sessionId, 'copy-session-btn');
    });
    
    document.getElementById('phone-number').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('pair-btn').click();
        }
    });
});
