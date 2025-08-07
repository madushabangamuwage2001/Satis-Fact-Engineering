// backend/routes/feedbackRoutes.js
const express = require('express');
const Feedback = require('../models/Feedback');
const transporter = require('../sendMail');


const router = express.Router();

// POST /api/feedback - Create new feedback
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    // Save feedback to DB
    const feedback = new Feedback({ name, email, phone, message });
    await feedback.save();

    // Send email to site owner
    const mailOptions = {
      from: email,
      to: 'madushdilshan222@gmail.com', // Owner's email
      subject: '📥 New Project Received from Website',
      html: `
       
        <p><strong> Client Name:</strong> ${name}</p>
        <p><strong> Client Email:</strong> ${email}</p>
        <p><strong> Client Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Details:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">${message}</blockquote>
        <p style="margin-top:20px; font-size:12px; color:#666;">This email was sent automatically from your website feedback form.</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // Don't fail the response even if email fails
      } else {
        console.log('Feedback notification email sent:', info.response);
      }
    });

    // Success response
    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully!',
      data: feedback
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    res.status(500).json({
      success: false,
      message: 'Error saving feedback. Please try again.'
    });
  }
});


// GET /api/feedback - Get all feedback (for admin use)
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: feedback,
      count: feedback.length
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching feedback.'
    });
  }
});

module.exports = router;
