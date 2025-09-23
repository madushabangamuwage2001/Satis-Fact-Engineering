const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

// MongoDB connection
let isConnected = false;

const connectToMongoDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://default:default@cluster0.mongodb.net/satisfact-engineering', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

// Feedback model
const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      trim: true,
      maxlength: [20, 'Phone number cannot exceed 20 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters']
    }
  },
  {
    timestamps: true
  }
);

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "madushdilshan222@gmail.com",
    pass: process.env.EMAIL_PASS || "btqg fxgr qugd yfjz"
  }
});

// CORS headers
const setCORSHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

module.exports = async (req, res) => {
  setCORSHeaders(res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectToMongoDB();

    if (req.method === 'POST') {
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
        to: process.env.OWNER_EMAIL || 'madushdilshan222@gmail.com',
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

      try {
        await transporter.sendMail(mailOptions);
        console.log('Feedback notification email sent');
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Don't fail the response even if email fails
      }

      // Success response
      return res.status(201).json({
        success: true,
        message: 'Feedback submitted successfully!',
        data: feedback
      });

    } else if (req.method === 'GET') {
      // Get all feedback (for admin use)
      const feedback = await Feedback.find().sort({ createdAt: -1 });
      return res.json({
        success: true,
        data: feedback,
        count: feedback.length
      });
    } else {
      return res.status(405).json({
        success: false,
        message: 'Method not allowed'
      });
    }

  } catch (error) {
    console.error('Error in feedback API:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Error processing feedback. Please try again.'
    });
  }
};