const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(express.json());

// Load existing messages or initialize
let messages = [];
if (fs.existsSync(MESSAGES_FILE)) {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
    messages = JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading messages file:', error);
  }
}

// Routes
app.get('/', (req, res) => {
  res.send('<div style="font-family: sans-serif; text-align: center; padding-top: 50px;"><h1>🚀 Portfolio Backend is Running!</h1><p>Backend API server is successfully active. Frontend requests should be sent to <code>/api/contact</code>.</p></div>');
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    subject: subject || 'Portfolio Contact',
    message,
    timestamp: new Date().toISOString()
  };

  messages.push(newMessage);

  // Save to file
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf8');
    console.log(`[NEW MESSAGE] from ${name} (${email}): "${message.substring(0, 50)}..."`);
    return res.json({ success: true, message: 'Your message has been saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ success: false, error: 'Internal server error while saving message.' });
  }
});

// GET endpoint to view messages (for local testing/admin review)
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
