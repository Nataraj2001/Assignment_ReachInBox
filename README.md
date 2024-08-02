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

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd assignment (Repo)

   npm install
cd ../frontend
npm start
The application should now be accessible on http://localhost:3000 for the frontend and http://localhost:5000 for the backend.



