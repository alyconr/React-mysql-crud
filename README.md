<div align="center">
 <h1 style="font-size: 30px; color: #FF0000">NBA Players Posters CRUD App </h1>
 </div>


This is a

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Prerequisites](#prerequisites)
4. [Setting Up the Database](#setting-up-the-database)
5. [Usage](#usage)
6. [Backend Configuration](#backend-configuration)
7. [Folder Structure](#folder-structure)
8. [API Endpoints](#api-endpoints)
9. [Deployment](#deployment)
10. [Technologies Used](#technologies-used)
11. [Contributing](#contributing)
12. [License](#license)
13. [Documentation](#documentation)

## Features


- **Create**: Easily add new NBA player posters by providing player details and an image URL.
- **Read**: View the list of NBA player posters with their names, teams, positions, and poster images.
- **Update**: Edit player information, including their name, team, position, and poster image.
- **Delete**: Remove a player poster from the database with a single click.

## Getting Started

To get started with the Jobs Manager API, follow the instructions in the sections below.

## Prerequisites

Before getting started, ensure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)
- MySQL
- MySQL Workbench
- Vite (You can install it globally with `npm install -g create-vite`)
- React Router (installed as a dependency in your Vite project)

## Setting Up the Database


1. Launch MySQL Workbench and create a new database for your project.

2. Design the `players` table within the database, including columns such as `id`, `name`, `description`,  `position`, `team`, `price`, and `image`.

3. Insert some sample data into the `players` table.

## Usage


## Usage

1. Create a `.env` file in the project root directory and set the following environment variables:

   * MONGODB_URI: Your MongoDB connection URI.
   * JWT_SECRET: A secret key for JWT token generation.
   * JWT_LIFETIME: The lifetime of the JWT token in seconds.
   * PORT: The port to run the server on.

2. Start the server:
```bash
npm start
```
The API should be accessible at http://localhost:8000 by default.

3. Start the client:
```bash
cd frontend
npm run dev
```
The client should be accessible at http://localhost:5173 by default.


## Backend Configuration


1. Set up a Node.js project for your backend.

2. Install the required packages, including `express`, `mysql2`, and `http-status-codes`.

3. Create an Express application, set up a MySQL connection, and implement custom error handling.

4. Design the routes for Create, Read, Update, and Delete operations for NBA player posters.

5. Implement controllers for these CRUD operations, which interact with the database.


## Folder Structure


```bash
backend
├── README.md
├── .env
├── controllers
│   ├── players.js
├── db
│   ├── connect.js
└── errors
    └── players.js
├── middlewares
│   ├── not-found.js
├── routes 
│   ├── players.js
├── index.js      
frontend
├── README.md
├── .env
├── frontend
│   ├── index.html
│   ├── index.js
│   ├── public
│   │   ├── favicon.ico
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── vite.config.js
└── vite.config.js
```


## API Endpoints

1. Create
    ```
    POST /players
    
    ```
2. Read
    ```
    GET /players

    ```
3. Update

    ```
    PUT /players/:id

    ```
4. Delete

    ```
    DELETE /players/:id
    ```

## Deployment


1. Start the backend server by navigating to the `backend` directory and running: `npm start`.

2. Start the Vite development server for the frontend by navigating to the `frontend` directory and running: `npm run dev`.

3. Open a web browser and access your application at `http://localhost:5173` for the frontend and `http://localhost:your-backend-port` for the backend.


## Technologies Used

1. Node.js
2. npm (Node Package Manager)
3. MySQL
4. MySQL Workbench
5. Vite (You can install it globally with `npm install -g create-vite`)
6. React Router (installed as a dependency in your Vite project)
7. Express
8. http-status-codes
9. cors

## Contributing

If you would like to contribute to the project, please read the [Contributing Guide](https://github.com/alyconr/NodeJs-Jobs-Api/blob/main/CONTRIBUTING.md).


## License

This project is licensed under the MIT License.

## Documentation

You can find the documentation for this project on GitHub: [https://github.com/alyconr/NodeJs-Jobs-Api/blob/main/README.md](https://github.com/alyconr/NodeJs-Jobs-Api/blob/main/README.md)



