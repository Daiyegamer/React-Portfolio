# HTTP5222 Assignment 2: React Frontend

This repository contains the source code for the React front-end developed as part of HTTP5222 Assignment 2. The project consumes data from the backend API created in Assignment 1. The API (built with Express) exposes endpoints for portfolio or small business data, and the React app retrieves this data to dynamically render the site content.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project demonstrates how to build a modern React application that connects to a separate backend API service. In this assignment, the API (developed in Assignment 1) is deployed with CORS enabled so that the front-end can fetch data seamlessly. The front-end is designed for a portfolio site (or similar small business site), showcasing important details such as:
  
- The developer’s name and desired role
- A list of projects, each with a screenshot, URL, brief description, and languages/technologies used
- Contact information and a functioning contact form

## Features

- **Responsive Design:** The UI is built with responsiveness and clean aesthetics in mind.
- **Dynamic Data Fetching:** Utilizes HTTP requests to retrieve data from the backend API.
- **Project Portfolio:** Displays project information including images, project links, and descriptions.
- **Contact Section:** Provides users an easy way to get in touch via a contact form or direct contact details.
- **Deployment Ready:** Configured for deployment on popular platforms (e.g., Netlify, Vercel, or Heroku).

## Project Structure

Below is an example structure of the project:

your-project/ ├── public/ │ └── index.html # Main HTML file ├── src/ │ ├── components/ # Reusable UI components │ │ ├── Header.js │ │ ├── Footer.js │ │ ├── ProjectCard.js │ │ └── ContactForm.js │ ├── App.js # Main App component │ ├── index.js # React entry point │ └── styles/ # CSS or SASS files ├── .env # Environment variables (API URLs, etc.) ├── package.json # Project dependencies and scripts └── README.md # This readme file

bash
Copy
Edit

## Installation and Setup

To run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-project.git
   cd your-project
Install Dependencies:

bash
Copy
Edit
npm install
Configure Environment Variables:

Create a .env file in the root directory and add your backend API URL (ensure that CORS is enabled on your API):

env
Copy
Edit
REACT_APP_API_URL=https://your-backend-api-url.com
Run the Application:

bash
Copy
Edit
npm start
The application will run in development mode at http://localhost:3000.

API Integration
The React front-end fetches data from the backend API built in Assignment 1. Some key endpoints used in the project include:

/api/portfolio: Retrieves general portfolio information.

/api/projects: Fetches an array of project details, such as project names, screenshots, URLs, descriptions, and the technologies used.

Ensure that the backend API is deployed and accessible at the URL specified in the .env file.

Deployment
To deploy the application:

Push Changes: Make sure your latest changes are pushed to your GitHub repository.

Choose a Deployment Platform: Link your repository to your chosen deployment service (e.g., Netlify, Vercel, or Heroku).

Environment Variables: Set the required environment variables on your deployment platform (for example, REACT_APP_API_URL).

Deploy: Follow the platform-specific steps to deploy your application.

Technologies Used
React: Building user interfaces using component-based architecture.

JavaScript (ES6+): Modern JavaScript features.

Axios/Fetch: For making HTTP requests to the backend API.

CSS/SASS: Styling the front-end.

Express & MongoDB: (From Assignment 1) Backend API service providing the data.

Future Improvements
Improve error handling and loading states for API requests.

Enhance the UI/UX with advanced styling and animations.

Add user authentication for admin functionalities.

Expand API endpoints to support additional features.

Contributing
Contributions are welcome! If you have any ideas, bug fixes, or improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Contact
For inquiries or further details, please contact:

Email: your-email@example.com

LinkedIn: Your LinkedIn Profile
