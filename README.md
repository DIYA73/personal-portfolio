# 💼 Full-Stack Personal Portfolio

**Modern, responsive personal portfolio website with authentication, protected admin dashboard, and project showcase. Built with React, Node.js, and MongoDB to demonstrate full-stack development skills.**

![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6+-green?style=flat-square&logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-5+-purple?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

---

## 📖 Overview

A full-stack personal portfolio website that goes beyond static HTML/CSS. Features a dynamic project showcase, contact form, blog section, and a protected admin dashboard for content management. Built to demonstrate modern web development practices and full-stack capabilities.

### 🎯 Key Features

- **🎨 Modern Design**: Clean, responsive UI with smooth animations
- **📱 Mobile-First**: Fully responsive across all devices
- **🔐 Authentication**: JWT-based admin authentication
- **🛡️ Protected Dashboard**: Admin panel for content management
- **📊 Project Showcase**: Dynamic display of portfolio projects
- **📧 Contact Form**: Functional contact form with email integration
- **✍️ Blog Section**: Content management system for blog posts
- **⚡ Fast Performance**: Optimized with Vite and lazy loading
- **🌓 Theme Support**: Light/dark mode toggle (optional)

---

## 🛠️ Tech Stack

### Frontend
```
⚛️  React 18 (UI Library)
⚡  Vite (Build Tool & Dev Server)
🎨  CSS3 / Tailwind CSS (Styling)
🔄  React Router (Client-side Routing)
📡  Axios (HTTP Client)
🎭  Framer Motion (Animations - optional)
```

### Backend
```
🚀  Node.js 18+ (Runtime)
🌐  Express.js (Web Framework)
🗄️  MongoDB (Database)
🔗  Mongoose (ODM)
🔐  JWT (Authentication)
📧  Nodemailer (Email Service)
🛡️  bcrypt (Password Hashing)
```

### DevOps
```
🐳  Docker (Containerization)
☁️  Vercel / Netlify (Frontend Hosting)
🌐  Render / Railway (Backend Hosting)
🗄️  MongoDB Atlas (Database Hosting)
```

---

## ✨ Features Breakdown

### Public Features

**1. Home Section**
- Hero section with introduction
- Social media links
- Call-to-action buttons
- Animated text effects

**2. About Section**
- Professional bio
- Skills showcase
- Tech stack visualization
- Experience timeline

**3. Projects Section**
- Dynamic project cards
- Filter by technology
- Project details modal
- Live demo & GitHub links
- Screenshots/GIFs

**4. Skills Section**
- Frontend skills
- Backend skills
- DevOps & Tools
- Soft skills

**5. Contact Section**
- Contact form with validation
- Email integration
- Social media links
- Location/availability info

**6. Blog (Optional)**
- Blog post listings
- Individual post pages
- Categories/tags
- Read time estimates

### Admin Features

**1. Authentication**
- Secure login page
- JWT token generation
- Protected routes
- Session management

**2. Dashboard**
- Overview statistics
- Recent activity
- Quick actions
- Analytics (views, clicks)

**3. Project Management**
- Add new projects
- Edit existing projects
- Delete projects
- Upload screenshots
- Reorder projects

**4. Blog Management**
- Create/edit blog posts
- Rich text editor
- Draft/publish workflow
- Categories management

**5. Contact Messages**
- View submitted messages
- Reply to inquiries
- Mark as read/unread
- Archive messages

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn**

### Installation

**1. Clone Repository**
```bash
git clone https://github.com/DIYA73/personal-portfolio.git
cd personal-portfolio
```

**2. Backend Setup**

```bash
cd backend
npm install
```

Create `.env` file:
```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# JWT
JWT_SECRET=your-super-secret-jwt-key-min-32-characters
JWT_EXPIRES_IN=7d

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173

# Admin Credentials (initial setup)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme123
```

**Start backend:**
```bash
npm run dev
# Backend runs on http://localhost:5000
```

**3. Frontend Setup**

Open new terminal:
```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

**Start frontend:**
```bash
npm run dev
# Frontend runs on http://localhost:5173
```

**4. Access Application**

- **Portfolio**: [http://localhost:5173](http://localhost:5173)
- **Admin Login**: [http://localhost:5173/admin/login](http://localhost:5173/admin/login)
- **Backend API**: [http://localhost:5000/api](http://localhost:5000/api)

**Default Admin Credentials:**
```
Email: admin@example.com
Password: changeme123
```

---

## 📁 Project Structure

```
personal-portfolio/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── common/         # Shared components
│   │   │   ├── sections/       # Page sections
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   └── Contact.jsx
│   │   │   └── admin/          # Admin components
│   │   ├── pages/              # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/           # API services
│   │   │   └── api.js
│   │   ├── utils/              # Utilities
│   │   ├── styles/             # CSS files
│   │   ├── assets/             # Images, icons
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env.example
│   ├── vite.config.js
│   └── package.json
│
├── backend/                    # Node.js Backend
│   ├── src/
│   │   ├── controllers/        # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── project.controller.js
│   │   │   ├── contact.controller.js
│   │   │   └── blog.controller.js
│   │   ├── models/             # Mongoose models
│   │   │   ├── User.model.js
│   │   │   ├── Project.model.js
│   │   │   ├── Contact.model.js
│   │   │   └── Blog.model.js
│   │   ├── routes/             # API routes
│   │   │   ├── auth.routes.js
│   │   │   ├── project.routes.js
│   │   │   ├── contact.routes.js
│   │   │   └── blog.routes.js
│   │   ├── middleware/         # Express middleware
│   │   │   ├── auth.middleware.js
│   │   │   └── upload.middleware.js
│   │   ├── config/             # Configuration
│   │   │   ├── db.js
│   │   │   └── email.js
│   │   ├── utils/              # Utilities
│   │   └── server.js           # Entry point
│   ├── uploads/                # File uploads (gitignored)
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (default: 'admin'),
  createdAt: Date
}
```

### Project Model
```javascript
{
  title: String,
  description: String,
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  imageUrl: String,
  featured: Boolean,
  order: Number,
  createdAt: Date
}
```

### Contact Model
```javascript
{
  name: String,
  email: String,
  message: String,
  read: Boolean,
  replied: Boolean,
  createdAt: Date
}
```

### Blog Model (Optional)
```javascript
{
  title: String,
  slug: String,
  content: String,
  excerpt: String,
  coverImage: String,
  category: String,
  tags: [String],
  published: Boolean,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### Authentication

```http
POST /api/auth/login
POST /api/auth/register (admin only)
GET /api/auth/me (protected)
```

### Projects

```http
GET /api/projects              # Public: Get all projects
GET /api/projects/:id          # Public: Get project details
POST /api/projects             # Protected: Create project
PUT /api/projects/:id          # Protected: Update project
DELETE /api/projects/:id       # Protected: Delete project
```

### Contact

```http
POST /api/contact              # Public: Submit contact form
GET /api/contact               # Protected: Get all messages
PUT /api/contact/:id           # Protected: Mark as read
DELETE /api/contact/:id        # Protected: Delete message
```

### Blog (Optional)

```http
GET /api/blog                  # Public: Get published posts
GET /api/blog/:slug            # Public: Get post by slug
POST /api/blog                 # Protected: Create post
PUT /api/blog/:id              # Protected: Update post
DELETE /api/blog/:id           # Protected: Delete post
```

---

## 🎨 Customization

### Update Personal Information

**1. Edit Frontend Content**

`client/src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Full-Stack Developer",
  bio: "Your bio here...",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourprofile",
  resume: "/path/to/resume.pdf"
};
```

**2. Update Skills**

`client/src/data/skills.js`:
```javascript
export const skills = {
  frontend: ["React", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "MongoDB"],
  devops: ["Docker", "Git", "CI/CD"]
};
```

**3. Add Projects**

Use admin dashboard or directly add to database:
```javascript
// Via admin dashboard (recommended)
// Or seed data:
const projects = [
  {
    title: "CoreStack SaaS",
    description: "AI-powered SaaS platform",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    githubUrl: "https://github.com/DIYA73/corestack-saas",
    liveUrl: "https://corestack-saas-ehlv.vercel.app"
  }
];
```

---

## 🚀 Deployment

### Deploy Frontend (Vercel)

```bash
cd client
vercel
```

Set environment variables:
- `VITE_API_URL` = Your backend URL

### Deploy Backend (Render)

1. Create new Web Service
2. Connect GitHub repository
3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add environment variables
5. Deploy

### Database (MongoDB Atlas)

1. Create free cluster
2. Get connection string
3. Update `MONGODB_URI` in backend environment

---

## 📊 Analytics (Optional)

Add Google Analytics or custom analytics:

```javascript
// client/src/services/analytics.js
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path
    });
  }
};

export const trackEvent = (action, category, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};
```

---

## 🔒 Security

**Implemented Security Measures:**

- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Input validation
- ✅ XSS protection
- ✅ CORS configuration
- ✅ Rate limiting (optional)
- ✅ Secure headers (Helmet)
- ✅ Environment variable secrets

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd client
npm test
```

---

## 📝 Content Guidelines

### Writing Project Descriptions

Good format:
```markdown
**What**: Brief description
**Why**: Problem it solves
**How**: Technologies used
**Highlight**: Key achievement or metric
```

Example:
```
Enterprise cybersecurity platform for API protection with real-time threat 
detection. Built to solve API abuse and DDoS attacks. Uses React, TypeScript, 
Node.js, and WebSockets for real-time updates. Handles 1000+ req/s with <50ms latency.
```

---

## 🗺️ Roadmap

### ✅ Phase 1: Core (Completed)
- [x] Responsive portfolio layout
- [x] Project showcase
- [x] Contact form
- [x] Admin authentication
- [x] Admin dashboard

### 🚧 Phase 2: Enhanced Features (Planned)
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Resume download
- [ ] Project filtering by tech
- [ ] Testimonials section
- [ ] Analytics integration

### 📋 Phase 3: Advanced (Future)
- [ ] Multi-language support
- [ ] CMS-style content editor
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] A/B testing capabilities

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**DIYA73**
- GitHub: [@DIYA73](https://github.com/DIYA73)
- LinkedIn: [linkedin.com/in/didi-86b00329a](https://www.linkedin.com/in/didi-86b00329a/)

---

**⭐ If you find this portfolio inspiring, please star the repository!**

**💼 Showcasing skills, one project at a time.**

---

**Made with ❤️ using React, Node.js, and MongoDB**
