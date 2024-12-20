# My Portfolio

Welcome to my personal portfolio! This project showcases my skills, experience, and work. Built using **Next.js**, it highlights various web development projects, the technologies I use, and provides ways to get in touch with me.

## Demo

You can view the live demo of the portfolio at:  
[https://my-portfolio-delta-seven-29.vercel.app](https://my-portfolio-delta-seven-29.vercel.app)

## Features

- **Responsive Design**: The portfolio is mobile-friendly and adapts to different screen sizes.
- **Dark Mode**: Switch between light and dark themes for a personalized experience.
- **Project Showcase**: Displaying various web development projects with descriptions and links to GitHub repositories or live demos.
- **About Me Section**: Learn more about my journey, skills, and experiences.
- **Contact Form**: A simple contact form for visitors to get in touch with me.

## Tech Stack

- **Next.js**: React framework for building fast and scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for creating modern, responsive designs.
- **React**: JavaScript library for building user interfaces.
- **Vercel**: Platform used for deploying the app.
- **EmailJS**: Service for handling contact form submissions.

## Installation

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Indresh535/hackathon-jsmastery
   ```

2. **Navigate to the project directory**:
   ```bash
   cd hackathon-jsmastery
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Docker Setup

To run this project using Docker:

1. **Build the Docker image**:
   ```bash
   docker build -t my-portfolio .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 my-portfolio
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

3. **For development (optional)**:
   ```bash
   docker run -p 3000:3000 -v $(pwd):/app my-portfolio
   ```

## Project Overview

### Pages

- **Home**: Introduction to the portfolio and an overview of skills.
- **About**: Detailed information about me, my journey, and expertise.
- **Projects**: Showcase of my web development projects with links to GitHub or live demos.
- **Contact**: A form to allow visitors to send messages directly to my email.
- **Login**: Authentication for accessing personalized sections (optional).

### Images

#### Home Page:
![Home Page](https://via.placeholder.com/600x400?text=Home+Page)

#### Portfolio Section:
![Portfolio Section](https://via.placeholder.com/600x400?text=Portfolio+Section)

#### Project Section:
![Project Section](https://via.placeholder.com/600x400?text=Project+Section)

#### Contact Form:
![Contact Form](https://via.placeholder.com/600x400?text=Contact+Form)

#### Login Page:
![Login Page](https://via.placeholder.com/600x400?text=Login+Page)

---

## License

This project is open-source and available under the [MIT License](LICENSE).