# Environment Variables for Production

These environment variables need to be set in your Vercel dashboard under Project Settings > Environment Variables:

## Required Variables

### Database
- `MONGO_URI` - Your MongoDB connection string
  - Example: `mongodb+srv://username:password@cluster0.mongodb.net/satisfact-engineering`

### Email Configuration  
- `EMAIL_USER` - Gmail address for sending emails
  - Example: `madushdilshan222@gmail.com`
- `EMAIL_PASS` - Gmail app password (not regular password)
  - Example: `btqg fxgr qugd yfjz`
- `OWNER_EMAIL` - Email address to receive contact form submissions
  - Example: `madushdilshan222@gmail.com`

## Setting Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Navigate to your project
3. Click on "Settings" tab
4. Click on "Environment Variables" in the sidebar
5. Add each variable with its value
6. Make sure to set them for "Production", "Preview", and "Development" environments

## Local Development

For local development, create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://localhost:27017/satisfact-engineering
EMAIL_USER=madushdilshan222@gmail.com
EMAIL_PASS=btqg fxgr qugd yfjz
OWNER_EMAIL=madushdilshan222@gmail.com
```

**Note:** Never commit the `.env` file to version control. It's already included in `.gitignore`.