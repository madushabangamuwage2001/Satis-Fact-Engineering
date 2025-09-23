# Assets Directory

This directory contains all the media assets for the Satis-Fact Engineering website.

## Required Assets

### Images
- `logo.png` - Company logo (recommended: 200x200px, transparent background)
- `company-details.jpg` - Company information flyer image
- Project images for portfolio showcase
- Team member photos
- Service category images

### Videos
- `cover-video.mp4` - Hero section background video
  - Recommended specs: 1920x1080, MP4 format, 30-60 seconds
  - Should showcase construction work, equipment, or completed projects
  - Keep file size under 10MB for optimal loading

### Placeholder Assets
Currently using placeholder.svg for missing images. Replace with actual photos when available.

## Image Optimization Tips
- Use WebP format for better compression
- Optimize images for web (compress without losing quality)
- Use appropriate dimensions for each use case
- Consider lazy loading for better performance
\`\`\`

```json file="nern-website/frontend/package.json"
[v0-no-op-code-block-prefix]{
  "name": "satisfact-engineering-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext js,jsx --fix",
    "preview": "vite preview",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.8",
    "@testing-library/react": "^13.4.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^14.5.1",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "babel-jest": "^29.7.0",
    "@babel/preset-env": "^7.23.6",
    "@babel/preset-react": "^7.23.3",
    "identity-obj-proxy": "^3.0.0"
  }
}
