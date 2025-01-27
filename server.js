const express = require('express');
    const nodemailer = require('nodemailer');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const app = express();
    const port = 3001;

    app.use(bodyParser.json());
    app.use(cors());

    app.post('/send-email', async (req, res) => {
      const { name, email, phone, subject, message, newsletter, privacy } = req.body;

      try {
        // Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: 'mail.webita.eu',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'support@webita.eu', // generated ethereal user
            pass: 'Nd0PT.;Yn}Gp' // generated ethereal password
          }
        });

        // Setup email data
        const mailOptions = {
          from: '"Webita Support" <support@webita.eu>', // sender address
          to: 'info@webita.eu', // list of receivers
          subject: `New Contact Form Submission from ${name}`, // Subject line
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}\nNewsletter: ${newsletter}\nPrivacy: ${privacy}`, // plain text body
          html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Subject: ${subject}</p><p>Message: ${message}</p><p>Newsletter: ${newsletter}</p><p>Privacy: ${privacy}</p>` // html body
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        res.status(200).send('Email sent successfully');
      } catch (error) {
        res.status(500).send('Error sending email');
      }
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
