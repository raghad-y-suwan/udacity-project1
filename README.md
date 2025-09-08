
# Image Processing API
Image Processing API using Node.js, TypeScript, Express, and Sharp.

##  Description
This project is an **image processing API** built with **Node.js, Express, and TypeScript**.  
It allows users to resize images by providing a filename, width, and height through query parameters.  

If the processed image already exists in the `thumb` folder, it will be returned directly. Otherwise, the image is resized using **Sharp** and stored for future requests.

---

##  Installation & Setup

### 1. Clone the repository

git clone <your-repo-url>

cd udacity-project1
### 2. Install dependencies
npm install

### 3. Build the project
npm run build

### 4. Start the server
npm run start

Server will run by default on:http://localhost:3000

---


## Endpoint
Example:

http://localhost:3000/images?filename=icelandwaterfall&width=400&height=400

---


## Scripts
npm run test → Compile TypeScript to JavaScript & Run unit tests

npm run start → Start the server with nodemon

npm run lint → Run ESLint

npm run format → Prettier checks

---

#### Developed by Raghad Suwan
