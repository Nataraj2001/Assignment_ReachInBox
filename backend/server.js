const express = require('express');
const app = express();
const port = 3000;
const { OAuth2Client } = require('google-auth-library');
const bodyParser = require('body-parser');
const validator = require('validator');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());

let users = [];

app.use(express.json());

app.get("/api/v1/onebox/list", (req, res) => {
    res.json({
        "status": 200,
        "data": [
          {
            "id": 3,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 1,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Shaw - following up on our meeting lastweek... | 7ZG2ZTV 6KG634E",
            "body": "<p>Hi Mitrajit,</p><p>Just wondering ifyou&rsquo;re still interested.</p><p>Regards,<br/>ShawAdley</p><p>6KG634E practicecowboy</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
          },
          {
            "id": 4,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 2,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Test mail",
            "body": "<p>Test mail</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
          }
        ]
      })
})


// 2. API to Get a email

app.get("/api/v1/onebox/messages/:threadId", (req, res) => {
    res.json({
        "status": 200,
        "data": [
          {
            "id": 2,
            "fromName": "Mitrajit Chandra",
            "fromEmail": "mitrajit2022@gmail.com",
            "toName": "",
            "toEmail": "shaw@getmemeetings.com",
            "cc": null,
            "bcc": null,
            "threadId": 1,
            "messageId": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "inReplyTo": null,
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Shaw - following up on our meeting lastweek... | 7ZG2ZTV 6KG634E",
            "body": "<p>How are you Shaw?</p><p>Thanks for reachingout over our web chat.</p><p>How can I help you with yourproject?</p><p>Please let me know if you need anythingelse.<p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 52,
            "sentAt": "2023-11-21T00:39:19.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
          },
          {
            "id": 3,
            "fromName": "Shaw Adley",
            "fromEmail": "shaw@getmemeetings.com",
            "toName": "",
            "toEmail": "mitrajit2022@gmail.com",
            "cc": null,
            "bcc": null,
            "threadId": 1,
            "messageId": "<a5dcWbm1ac5e46d38746648c3e2f6d2c@getmemeetings.com>",
            "inReplyTo": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "references": "<4a5cWemdbfda475fabaf856ef5e806a7@gmail.com>",
            "subject": "Shaw - following up on our meeting lastweek... | 7ZG2ZTV 6KG634E",
            "body": "<p>Hi Mitrajit,</p><p>Just wondering ifyou&rsquo;re still interested.</p><p>Regards,<br/>ShawAdley</p><p>6KG634E practicecowboy</p>",
            "isRead": true,
            "folder": "INBOX",
            "uid": 594,
            "sentAt": "2023-11-23T04:08:45.000Z",
            "archivedAt": null,
            "createdAt": "2023-11-23T07:38:46.000Z",
            "updatedAt": "2023-11-23T07:38:46.000Z",
            "deletedAt": null
          }
        ]
      });
})

app.delete("/api/v1/onebox/messages/:threadId", (req, res) => {
    res.json({
        "status": 200,
        "message": "Email messages deleted successfully"
      })
})

app.post("/api/v1/onebox/reply/:threadId", (req, res) => {
    res.json({
        "status": 200,
        "message": "Success"
      })
})


// Reply to an email
app.post("/api/v1/onebox/reply/:threadId", (req, res) => {
  const { reply } = req.body;
  res.json({ status: 200, message: "Success" });
});

// Google login
app.post('/api/v1/onebox/signup', async (req, res) => {
    const { email, password } = req.body;
  
    // Basic validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
    }
  
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
  
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Store the new user
    users.push({ email, password: hashedPassword });
  
    res.json({ success: true, message: 'User registered successfully' });

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
