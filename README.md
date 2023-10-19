# info-wave-website

website is live on following link
(https://worrisome-tux-dove.cyclic.app/)

# News Website Setup Guide

Welcome to the setup guide for your news website project! This documentation will help you get your project up and running on your local computer. 🚀

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. [Node.js](https://nodejs.org/en/download/): You'll need Node.js to run JavaScript on your server.

## Installation Steps

Follow these steps to set up your news website project:

1. **Clone the Repository**:
   - Open your terminal.
   - Navigate to the directory where you want to store your project.
   - Run the following command to clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. **Install Dependencies**:
   - Change your working directory to the project folder:

   ```bash
   cd <project_directory>
   ```

   - Install the project dependencies using npm (Node Package Manager):

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a file named `.env` in the root of your project.
   - Add your News API key to the `.env` file:

   ```plaintext
   API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual News API key.

4. **Start the Server**:
   - Run the following command to start the server:

   ```bash
   npm start
   ```

   Your server will start, and you will see a message in the console indicating that the server is running on port 3000.

5. **Access the Website**:
   - Open a web browser.
   - Go to the following URL to access your news website:

   ```
   http://localhost:3000
   ```

   You should now see your news website homepage.

## Usage

Your news website provides various endpoints to view news articles by category. Here are the available endpoints:

- `/`: Displays top headlines in India.
- `/business`: Displays business-related news.
- `/entertainment`: Displays entertainment-related news.
- `/general`: Displays general news.
- `/health`: Displays health-related news.
- `/science`: Displays science-related news.
- `/sports`: Displays sports-related news.
- `/technology`: Displays technology-related news.

You can also search for specific news articles using the search bar on the homepage.

## Additional Notes

- This project uses the [News API](https://newsapi.org/). Make sure you have an active API key to access news data.
- You can customize the project further by modifying the code in the `app.js` file and the EJS templates in the `views` directory.

That's it! You've successfully set up your news website on your local computer. Enjoy exploring and customizing your news website! 📰🔍🎉
