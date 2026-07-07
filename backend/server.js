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
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; color: #333; line-height: 1.6;">
      <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #eaeaea; padding-bottom: 20px;">
        <h1 style="color: #6366f1; margin-bottom: 10px;">🚀 Jalkam Tanusree Portfolio Backend</h1>
        <p style="color: #666; font-size: 1.1rem; margin: 0;">Server is successfully active & receiving contact form messages.</p>
      </div>

      <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px; color: #444; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
        <span>📥 Inbox</span>
        <span style="background: #6366f1; color: white; font-size: 0.9rem; padding: 2px 10px; border-radius: 20px;">${messages.length} messages</span>
      </h2>

      ${messages.length === 0 ? `
        <div style="text-align: center; padding: 40px; border: 2px dashed #ddd; border-radius: 8px; color: #999;">
          <p style="margin: 0; font-size: 1.1rem;">No messages received yet.</p>
          <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Fill out the contact form on your portfolio website to send one!</p>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${[...messages].reverse().map(m => `
            <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #888; margin-bottom: 10px; border-bottom: 1px dashed #eee; padding-bottom: 10px;">
                <span><strong>From:</strong> ${m.name} (<a href="mailto:${m.email}" style="color: #6366f1; text-decoration: none;">${m.email}</a>)</span>
                <span>${new Date(m.timestamp).toLocaleString()}</span>
              </div>
              <div style="margin-bottom: 10px;">
                <strong>Subject:</strong> ${m.subject}
              </div>
              <div style="background: white; border: 1px solid #eaeaea; border-radius: 6px; padding: 15px; margin: 0; white-space: pre-wrap; font-size: 0.95rem; color: #444;">${m.message}</div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
  res.send(html);
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
const server = app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`\n⚠️  [Port ${PORT} is already in use]`);
    console.log(`Your backend server is ALREADY running and active on http://localhost:${PORT}!`);
    console.log(`No action is required. You can go ahead and test your contact form directly. Good to go!\n`);
    process.exit(0);
  } else {
    throw err;
  }
});
