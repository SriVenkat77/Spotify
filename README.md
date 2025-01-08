# Spotify Clone: A Music Streaming Web Application

## Deployed Demo
- **Frontend User**: [Live Demo](https://spotifyn.netlify.app)
- **Frontend Admin**: [Live Demo](https://spotify-admin.netlify.app)
- **Backend**: [Live API](https://spotify-1-fgy2.onrender.com)

## Introduction: High-Level Overview

**Name**: Spotify Clone  
**Objective**: The goal of this project is to provide users with a music streaming platform where they can sign up, search for songs, view albums, and play music. The app also features an admin panel to manage albums and songs, with image uploads handled via Cloudinary.  

**Tech Stack**:
- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Cloud Storage**: Cloudinary (for album and song images)

## Detailed Feature Walkthrough

### 1. User Registration, Login & Password Reset
- **Description**: Secure user authentication for users to register, log in, and reset their password.
- **Implementation**:
  - **Authentication**: JWT-based user authentication and role management .
  - **Registration/Login**: React forms to collect user data. Passwords are hashed with bcrypt before storing in MongoDB.
  - **Password Reset**: Send reset links to users' emails via NodeMailer and allow users to update their password.
  
### 2. Song & Album Viewing and Playback
- **Description**: Users can view albums, listen to songs, and explore.
- **Implementation**:
  - **Song Playback**: Integrated audio player for playing songs directly from the platform.
  - **Album Viewing**: Each album can display song lists with images, titles, and descriptions.
  - **Search Functionality**: Search bar to find songs  by title.

### 3. Admin Panel
- **Description**: Admin  can add new albums, songs, and images via an easy-to-use interface.
- **Implementation**:
  - **Album/Song Management**: Admins can upload new albums and songs using forms. Songs can be linked to albums, and each song/album can have associated images stored in Cloudinary.
  - **Cloudinary Integration**: Use Cloudinary API to upload and retrieve images for songs and albums.
  
### 4. Search Functionality
- **Description**: Users can search for  songs using a dynamic search bar.
- **Implementation**:
  - **Search API**: Built a search feature using MongoDB query operators to fetch relevant songs  from the database.
  
## Technical Details

### Tech Stack
- **Frontend**: React + Vite with TailwindCSS for responsive, modern design.
- **Backend**: Node.js and Express for building APIs and handling user authentication.
- **Database**: MongoDB for storing user data, albums, and songs.
- **Cloud Storage**: Cloudinary for storing album and song images.
- **Email**: NodeMailer for sending password reset links.

## Repository Structure
- **Frontend**: Contains React components, Redux store, and TailwindCSS configurations for styling.
- **Backend**: Contains Express routes, controllers, and authentication logic.
