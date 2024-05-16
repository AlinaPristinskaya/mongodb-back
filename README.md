# Testing the Blog API Using Postman

This repository contains a simple Express.js API for managing blog posts with MongoDB using Mongoose. 
To test the API endpoints, you can use Postman, a popular tool for testing APIs.

## Getting Started

1. Open the terminal 
2. Install the dependencies using 

```
npm install
```

3. Change the MongoDB connection string (URI variable) in the server.js file (line 16) to your own connection string. You can get it from your Atlas cluster.

4. Start the server using 

```
npm start
```

The server will start on http://localhost:8080

The server will also connect to your MongoDB database.

## Postman Setup

1. [Download and install Postman](https://www.postman.com/downloads/), if you haven't already.
2. In Postman, create a new blank workspace.
3. In the workspace, create a new HTTP collection to organize your requests.

### 1. Create a New Blog

- Set the request method to POST 
- Set the request URL to http://localhost:8080/blogs/add
- Click the 'Send' button
- View the response in the 'Body' tab

### 2. Get All Blogs

- Set the request method to GET
- Set the request URL to http://localhost:8080/blogs
- Click the 'Send' button
- View the response in the 'Body' tab

### 3. Update Blog Author

- Set the request method to PUT
- Set the request URL to http://localhost:8080/blogs/update-author
- Click the 'Send' button
- View the response in the 'Body' tab
- Send a 'Get All Blogs' request to see the updated author name

### 4. Delete Blogs with Empty Authors

- Set the request method to DELETE
- Set the request URL to http://localhost:8080/blogs/delete-author
- Click the 'Send' button
- View the response in the 'Body' tab
- Send a 'Get All Blogs' request to see the updated list of blogs

## Notes
- Ensure the MongoDB URI in server.js is properly configured.
- Ensure that you have Postman's Desktop Agent installed and enabled so that you can make requests to a local server.