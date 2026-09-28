const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Enterprise Inquiry Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  console.log('--- NEW ENTERPRISE INQUIRY ---');
  console.log(`From: ${name} (${email})`);
  console.log(`Company: ${company || 'N/A'}`);
  console.log(`Message: ${message}`);
  console.log('------------------------------');

  // Yahan par aap Nodemailer ya database integration add kar sakte hain
  return res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Express server running on port ${PORT}`));