# Satis-Fact Engineering Website

A modern, professional construction marketing website built with React 18, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern React 18** with functional components and hooks
- **Vite** for fast development and building
- **Tailwind CSS** with custom color palette
- **React Router** for multi-page navigation
- **Responsive design** - mobile-first approach
- **Transparent navbar** that adapts on scroll
- **Video hero section** with autoplay and fallback
- **Interactive service cards** with flip animations
- **Floating CTA button** with modal popup
- **Contact forms** integrated with backend API
- **Professional animations** and transitions
- **Accessibility features** with proper ARIA labels
- **Error handling** and loading states
- **Unit tests** with Jest and React Testing Library

## 🎨 Design System

### Color Palette
- **Primary Background**: White (#FFFFFF)
- **Primary Accent**: Dark Red (#8B0000)
- **Secondary Accent**: Steel Gray (#4B5563)
- **Highlight**: Construction Yellow (#FACC15)
- **Text Default**: Black (#000000)

### Typography
- **Headings**: Poppins (weight 600+)
- **Body Text**: Open Sans (weight 400)

## 📁 Project Structure

\`\`\`
nern-website/
├── backend/                 # Node.js/Express backend
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── Feedback.js     # Feedback model
│   ├── routes/
│   │   └── feedbackRoutes.js # API routes
│   └── server.js           # Express server
├── frontend/                # React frontend
│   ├── public/
│   │   └── assets/         # Images, videos, logos
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FloatingCTA.jsx
│   │   │   ├── ContactModal.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorBoundary.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   ├── __tests__/      # Unit tests
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── jest.config.js
│   └── .eslintrc.js
└── README.md
\`\`\`

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (for backend)

### Full Stack Setup

1. **Clone the repository**:
   \`\`\`bash
   git clone <repository-url>
   cd nern-website
   \`\`\`

2. **Backend Setup**:
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. **Set up environment variables**:
   Create a `.env` file in the backend directory:
   \`\`\`env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   \`\`\`

4. **Start the backend server**:
   \`\`\`bash
   npm start
   \`\`\`

5. **Frontend Setup** (in a new terminal):
   \`\`\`bash
   cd frontend
   npm install
   \`\`\`

6. **Start the frontend development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

7. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Development Commands

#### Frontend
\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Preview production build
npm run preview
\`\`\`

#### Backend
\`\`\`bash
# Start server
npm start

# Start with nodemon (if installed)
npm run dev
\`\`\`

## 📱 Pages

- **Home** (`/`) - Hero video, featured projects, services overview
- **About Us** (`/about`) - Company story, mission, vision, team
- **Services** (`/services`) - Interactive service cards with flip animations
- **Contact Us** (`/contact`) - Contact form, map, contact information

## 🔧 Key Components

### Navbar
- **Transparent design** that becomes solid on scroll
- **Color-changing elements** based on scroll position
- Mobile-responsive hamburger menu
- Active page highlighting

### FloatingCTA
- Animated floating action button
- Auto-opens after 5 seconds of inactivity
- Modal with WhatsApp, Messenger, and email options
- Loading states and error handling

### ContactModal
- Tabbed interface for quick contact and detailed form
- Integrated with backend API for form submissions
- Form validation and error handling
- Loading spinners during submission

### Service Cards
- Interactive flip cards on hover/click
- Detailed service information on card back
- Responsive grid layout
- Smooth animations

## 🎯 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Updating Colors
Modify the color palette in `tailwind.config.js`:
\`\`\`javascript
colors: {
  construction: {
    red: "#8B0000",
    yellow: "#FACC15",
    gray: "#4B5563",
    // Add more colors as needed
  }
}
\`\`\`

### Replacing Assets
1. Add your assets to `public/assets/`
2. Update image paths in components
3. Replace placeholder content with real data

## 🧪 Testing

The project includes comprehensive unit tests using Jest and React Testing Library:

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm test:coverage
\`\`\`

### Test Coverage
- Component rendering
- User interactions
- API integration
- Accessibility features
- Error handling

## 📞 Contact Information

- **Phone**: +94 763 115 305, +94 712 912 196
- **Email**: asankaabeynayake@gmail.com
- **Location**: Colombo, Sri Lanka
- **WhatsApp**: https://wa.me/94763115305

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform
3. Set up environment variables if needed

### Backend (Heroku/Railway/Render)
1. Set up environment variables on your hosting platform:
   - `MONGO_URI`
   - `PORT`
2. Deploy the backend directory
3. Update API endpoints in frontend if needed

### Full Stack Deployment
1. Deploy backend first and note the API URL
2. Update frontend API calls to use production backend URL
3. Deploy frontend with updated API endpoints

## 🔧 Environment Variables

### Backend (.env)
\`\`\`env
MONGO_URI=mongodb://localhost:27017/satisfact-engineering
PORT=5000
NODE_ENV=production
\`\`\`

### Frontend (if needed)
\`\`\`env
VITE_API_URL=http://localhost:5000
\`\`\`

## 📝 Code Quality

- **ESLint** with Airbnb configuration
- **Prettier** for code formatting
- **Jest** for unit testing
- **React Testing Library** for component testing
- **Accessibility** compliance with WCAG guidelines

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   - Change port in `vite.config.js` or backend `server.js`

2. **MongoDB connection issues**:
   - Check MongoDB is running
   - Verify connection string in `.env`

3. **Build errors**:
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for TypeScript errors if using TS

4. **API calls failing**:
   - Verify backend is running
   - Check CORS configuration
   - Confirm API endpoints match

## 📄 License

© 2024 Satis-Fact Engineering. All rights reserved.

---

**Building Dreams, Raising Standards** 🏗️

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Ensure all tests pass
6. Submit a pull request

## 📈 Performance Optimization

- Lazy loading for images
- Code splitting with React.lazy()
- Optimized bundle size with Vite
- Compressed assets
- Efficient re-renders with React hooks

## 🔒 Security

- Input validation on forms
- XSS protection
- CORS configuration
- Environment variable protection
- Secure API endpoints
