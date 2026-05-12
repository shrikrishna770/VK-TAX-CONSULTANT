import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    if (!req.body) {
      return res.status(400).json({ message: 'Missing request body' });
    }

    const { fullName, email, service, message } = req.body;
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    // 1. Send to Google Sheets if URL is configured
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith('http')) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, service, message }),
        });
      } catch (sheetError) {
        console.error('Google Sheets error:', sheetError.message);
      }
    }

    // 2. Save to local CSV (Optional Backup)
    try {
      const filePath = path.join(process.cwd(), 'leads.csv');
      const header = 'Date,Full Name,Email,Service,Message\n';
      const exists = fs.existsSync(filePath);

      if (!exists) {
        fs.writeFileSync(filePath, header);
      }

      const escapeCSV = (str) => {
        if (typeof str !== 'string') return str;
        return `"${str.replace(/"/g, '""')}"`;
      };

      const date = new Date().toLocaleString();
      const row = `${escapeCSV(date)},${escapeCSV(fullName)},${escapeCSV(email)},${escapeCSV(service)},${escapeCSV(message || 'N/A')}\n`;

      fs.appendFileSync(filePath, row);
    } catch (csvError) {
      console.warn('CSV logging skipped:', csvError.message);
    }

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Lead capture error:', error.message);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}
