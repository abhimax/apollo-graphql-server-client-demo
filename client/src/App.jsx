import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import graphQLLogo from "./assets/graphQL.png";
import apolloLogo from "./assets/apollo.png";
import "./App.css";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_DATA = gql`
  query GetData {
    data {
      id
      name
      description
    }
  }
`;

const ADD_DATA = gql`
  mutation AddData($name: String!, $description: String!) {
    addData(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const UPDATE_DATA = gql`
  mutation UpdateData($id: ID!, $name: String!, $description: String!) {
    updateData(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

const DELETE_DATA = gql`
  mutation DeleteData($id: ID!) {
    deleteData(id: $id)
  }
`;

function App() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const { loading, error, data } = useQuery(GET_DATA);

  const [addData] = useMutation(ADD_DATA, {
    refetchQueries: [{ query: GET_DATA }],
  });

  const [updateData] = useMutation(UPDATE_DATA, {
    refetchQueries: [{ query: GET_DATA }],
  });

  const [deleteData] = useMutation(DELETE_DATA, {
    refetchQueries: [{ query: GET_DATA }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddData = () => {
    addData({ variables: formData });
    setFormData({ name: "", description: "" });
  };

  const handleUpdateData = (id) => {
    const { name, description } = formData;
    updateData({ variables: { id, name, description } });
    setFormData({ name: "", description: "" });
  };

  const handleDeleteData = (id) => {
    deleteData({ variables: { id } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://graphql.org/" target="_blank">
          <img src={graphQLLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.apollographql.com/" target="_blank">
          <img src={apolloLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Apollo GraphGL Server - Client Demo</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div>
          <h3>Add New Item:</h3>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <button onClick={handleAddData}>Add</button>
        </div>
        <ul>
          {data.data.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {/* Form to Update Item */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleUpdateData(item.id)}>
                  Update
                </button>
                <button onClick={() => handleDeleteData(item.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        The Apollo GraphQL Server-Client Demo is an application that showcases
        the integration of both a GraphQL server and a GraphQL client using the
        Apollo ecosystem.
      </p>
    </>
  );
}

export default App;
