import React from "react";
import { useUsers } from "./hooks/useUsers";
import UserTable from "./components/UserTable";
import "./styles/App.css";

const App: React.FC = () => {
  const { users, loading, error, setUsers } = useUsers();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
