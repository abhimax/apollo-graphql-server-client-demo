import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import graphQLLogo from "./assets/graphQL.png";
import apolloLogo from "./assets/apollo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
