import React, { useState } from "react";
import type { User } from "../types/user";
import UserModal from "./UserModal";
import "../styles/UserTable.css";

interface UserTableProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserTable: React.FC<UserTableProps> = ({ users, setUsers }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name / Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => setSelectedUser(user)}>
                <td data-label="Name / Email">
                  <div className="name">{user.name}</div>
                  <div className="email">{user.email}</div>
                </td>
                <td data-label="Address">{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
                <td data-label="Phone">{user.phone}</td>
                <td data-label="Website">
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </td>
                <td data-label="Company">{user.company.name}</td>
                <td data-label="Action">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(user.id);
                    }}
                    className="delete-btn"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </>
  );
};

export default UserTable;
