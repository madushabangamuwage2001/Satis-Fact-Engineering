# Vercel Deployment Guide

This guide will help you deploy the Satis-Fact Engineering website to Vercel.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **MongoDB Database**: Set up a MongoDB database (MongoDB Atlas recommended)
3. **Gmail Account**: For sending contact form emails

## Deployment Steps

### 1. Connect Your Repository

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository: `madushabangamuwage2001/Satis-Fact-Engineering`

### 2. Configure Build Settings

Vercel should automatically detect the configuration from `vercel.json`, but verify:

- **Framework Preset**: Other
- **Root Directory**: `./` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `./` (root)

### 3. Set Environment Variables

Before deploying, add these environment variables in Project Settings:

```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
OWNER_EMAIL=email_to_receive_contact_forms
```

**Important**: Use Gmail App Passwords, not regular passwords. See [Google's guide](https://support.google.com/accounts/answer/185833) for creating app passwords.

### 4. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be available at `https://your-project-name.vercel.app`

## Custom Domain (Optional)

1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

## File Structure for Vercel

```
├── api/
│   ├── feedback.js          # Serverless API function
│   └── package.json         # API dependencies
├── assets/                  # Static assets (images, CSS, JS)
├── index.html              # Main HTML file
├── vercel.json             # Vercel configuration
├── package.json            # Build configuration
├── .gitignore              # Git ignore rules
└── nern-website/           # Original source code
    ├── frontend/           # React source
    └── backend/            # Express source (reference)
```

## How It Works

1. **Frontend**: The React app is built and served as static files
2. **Backend**: Express routes are converted to serverless functions in `/api`
3. **Database**: MongoDB connection is established per request (serverless-friendly)
4. **Email**: Contact forms trigger emails via serverless functions

## Troubleshooting

### Build Fails
- Check that all dependencies are installed
- Verify Node.js version (16+)
- Check build logs in Vercel dashboard

### API Not Working
- Verify environment variables are set
- Check MongoDB connection string
- Review function logs in Vercel dashboard

### Email Not Sending
- Ensure Gmail app password is correct
- Check spam folder
- Verify EMAIL_USER and EMAIL_PASS variables

## Monitoring

- **Analytics**: Enable in Project Settings > Analytics
- **Logs**: Check function logs in Vercel dashboard
- **Performance**: Monitor Core Web Vitals in Vercel dashboard

## Support

For deployment issues:
- Check [Vercel documentation](https://vercel.com/docs)
- Contact support through Vercel dashboard
- Review this project's README.md for additional details