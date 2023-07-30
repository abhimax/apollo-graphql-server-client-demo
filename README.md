# CRUD Application with Apollo GraphQL Server and Client

This is a simple CRUD (Create, Read, Update, Delete) application built using Apollo GraphQL for both the server and the client. The application allows you to manage a list of items with their names and descriptions.

## Features

- View a list of items with their names and descriptions.
- Add new items to the list with a name and description.
- Update existing items with new names and descriptions.
- Delete items from the list.

## Technologies Used

- **Server:**
  - Apollo Server
  - Express
  - GraphQL
- **Client:**
  - React
  - Apollo Client

## Getting Started

### Server

1. Navigate to the `server` folder.

2. Install dependencies:

   ```bash
   npm install
   ```

### Client

1. Navigate to the `client` folder.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Replace 'YOUR_GRAPHQL_SERVER_ENDPOINT' in client/src/App.js with the actual URL of your GraphQL server (e.g., http://localhost:4000/graphql).

4. Run the client:
   ```bash
   npm run dev
   ```
   The client application should be running at http://localhost:3000.
   ### Folder Structure

- server: Contains the Apollo GraphQL Server code.
- client: Contains the React Apollo Client code.
