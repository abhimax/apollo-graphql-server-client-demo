// server.js
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const app = express();

// Sample data (in-memory data store)
let data = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" },
];

// GraphQL typeDefs
const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    data: [Item!]!
  }

  type Mutation {
    addData(name: String!, description: String!): Item!
    updateData(id: ID!, name: String!, description: String!): Item!
    deleteData(id: ID!): Boolean!
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    data: () => data,
  },
  Mutation: {
    addData: (_, { name, description }) => {
      // Add data validation here (e.g., checking for duplicates, required fields)
      const newItem = {
        id: String(data.length + 1),
        name,
        description,
      };
      data.push(newItem);
      return newItem;
    },
    updateData: (_, { id, name, description }) => {
      // Add data validation here (e.g., checking if the item exists)
      const index = data.findIndex((item) => item.id === id);
      if (index === -1) throw new Error("Item not found");
      data[index] = { id, name, description };
      return data[index];
    },
    deleteData: (_, { id }) => {
      // Add data validation here (e.g., checking if the item exists)
      const index = data.findIndex((item) => item.id === id);
      if (index === -1) throw new Error("Item not found");
      data.splice(index, 1);
      return true;
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware to express app
server.start().then(() => {
  server.applyMiddleware({ app });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}${server.graphqlPath}`
  );
});
