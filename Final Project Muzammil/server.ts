import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory "database"
const db = {
  donations: [] as any[],
  volunteers: [] as any[],
  requests: [] as any[],
  feedback: [] as any[],
  messages: [] as any[]
};

// Helper function to send email notification
async function sendNotificationEmail(subject: string, data: any) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFICATION_EMAIL } = process.env;

  // Only attempt to send if credentials are provided
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn('Email credentials not provided. Skipping email notification.');
    console.log('Would have sent email to:', NOTIFICATION_EMAIL || 'rooh22526@gmail.com');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Save Food App" <${SMTP_USER}>`,
      to: NOTIFICATION_EMAIL || 'rooh22526@gmail.com',
      subject: `New SaveFood Alert: ${subject}`,
      text: JSON.stringify(data, null, 2),
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #059669;">New ${subject} Received!</h2>
          <hr />
          <pre style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${JSON.stringify(data, null, 2)}</pre>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">This is an automated notification from SaveFood.</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON
  app.use(express.json());

  // --- API ROUTES ---

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running', dataCount: db });
  });

  // Handle Donation Submissions
  app.post('/api/donations', async (req, res) => {
    const data = { ...req.body, id: Date.now(), createdAt: new Date() };
    db.donations.push(data);
    console.log('New Donation Received:', data);
    
    await sendNotificationEmail('Donation', data);
    
    res.status(201).json({ success: true, message: 'Donation recorded' });
  });

  // Handle Volunteer Registrations
  app.post('/api/volunteers', async (req, res) => {
    const data = { ...req.body, id: Date.now(), createdAt: new Date() };
    db.volunteers.push(data);
    console.log('New Volunteer Registered:', data);
    
    await sendNotificationEmail('Volunteer Registration', data);
    
    res.status(201).json({ success: true, message: 'Volunteer registered' });
  });

  // Handle Food Requests
  app.post('/api/requests', async (req, res) => {
    const data = { ...req.body, id: Date.now(), createdAt: new Date() };
    db.requests.push(data);
    console.log('New Food Request:', data);
    
    await sendNotificationEmail('Food Request', data);
    
    res.status(201).json({ success: true, message: 'Request submitted' });
  });

  // Handle Feedback
  app.post('/api/feedback', async (req, res) => {
    const data = { ...req.body, id: Date.now(), createdAt: new Date() };
    db.feedback.push(data);
    console.log('New Feedback Received:', data);
    
    await sendNotificationEmail('User Feedback', data);
    
    res.status(201).json({ success: true, message: 'Feedback received' });
  });

  // Handle Contact messages
  app.post('/api/contact', async (req, res) => {
    const data = { ...req.body, id: Date.now(), createdAt: new Date() };
    db.messages.push(data);
    console.log('New Contact Message:', data);
    
    await sendNotificationEmail('Contact Inquiry', data);
    
    res.status(201).json({ success: true, message: 'Message sent' });
  });

  // --- VITE MIDDLEWARE / STATIC SERVING ---

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
