# ReachInbox Web App Assignment

## Description

This project is a web application for managing email threads, with features including user authentication, data fetching, keyboard shortcuts, a custom text editor, and reply functionality. The app supports both light and dark modes, and integrates with provided APIs.

## Features

1. **Login Page**
   - Implement the login page using the provided design.
   - On successful login, users are redirected to the Onebox screen.

2. **Onebox Screen**
   - Fetch and display data using API integration.
     - **GET** `/onebox/list` - Retrieve a list of threads.
     - **GET** `/onebox/:thread_id` - Retrieve details of a specific thread.
     - **DELETE** `/onebox/:thread_id` - Delete a specific thread.
   - Implement keyboard shortcuts:
     - Press "D" to delete a thread.
     - Press "R" to open the reply box.

3. **Custom Text Editor**
   - Integrate a custom text editor with additional functionality:
     - Add a "SAVE" button to save changes.
     - Add a "Variables" button to insert predefined variables.

4. **Reply Functionality**
   - Implement the ability to send replies:
     - **POST** `/reply/:thread_id` - Send a reply to a specific thread.
     - Request body:
       ```json
       {
         "from": "email",
         "to": "email",
         "subject": "",
         "body": "<html></html>"
       }
       ```

5. **Light and Dark Mode**
   - Provide options for both light and dark modes.

## Design Files

The design for this project is provided in Figma. we can view the design [here](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design).

## API Documentation

The API endpoints and details are available [here](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27).

## Getting Started

### Prerequisites

Make sure we have the following installed:
- [Node.js](https://nodejs.org/) (includes npm)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation for FrontEnd

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd assignment (Repo)

   npm install
cd ../frontend
npm start
The application should now be accessible on http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

2. **Install Dependencies

Install the project dependencies using npm:

bash
npm install
This command will install all the necessary packages listed in the package.json file, including ReactJS and other dependencies.

Start the Development Server

Once the dependencies are installed, start the development server:

bash
npm start
This command will start the React development server and open the application in your default web browser. By default, the application will be available at http://localhost:3000.

Build for Production

To create a production-ready build of the application, run
### Installation for Backend:-
Installation
After download or clone run npm install to install all the dependancies.

The "npm install express" command is used to install the Express.js framework, which is a popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and utilities for handling HTTP requests, routing, middleware, and more.

npm install express

The "npm init -y" command is used to initialize a new Node.js project with default values for package.json without needing to answer any prompts.

npm init -y 

The command "npm install nodemon -D" is used to install Nodemon as a development dependency for a Node.js project. Nodemon is a utility that monitors changes in your Node.js application and automatically restarts the server whenever changes are detected, making the development process more efficient and productiv

npm install nodemon -D 

The command "npm run dev" is used to execute the development script defined in a Node.js project's package.json file. Typically, it starts a development server or runs tasks such as transpiling code, bundling assets, and watching for changes, enabling developers to work on their projects with live updates and debugging capabilities.

npm run dev
### Output
# Login Page 
![image](https://github.com/user-attachments/assets/a33edcd0-efb9-4aaf-9dae-bf6ba62cc45b)

# OneBox
![image](https://github.com/user-attachments/assets/b728d05a-b6e5-446f-8f02-450fee6f9eb0)

# Onebox-list Emails
![image](https://github.com/user-attachments/assets/33dd2f28-d135-42d1-8770-786d4e6ffaff)

# Onebox-Get Thread
![image](https://github.com/user-attachments/assets/76785ff2-f8ae-40d7-87b7-0e14c48aae90)

# Onebox - Delete Thread (postman)
![image](https://github.com/user-attachments/assets/fafd8d68-7c60-4e4e-8f2e-55627cd509fe)


