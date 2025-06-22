import React from "react";
import type { User } from "../types/user";
import "../styles/UserModal.css";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>

        <div className="modal-section">
          <h3>Address</h3>
          <p>{`${user.address.street}, ${user.address.suite}`}</p>
          <p>{`${user.address.city}, ${user.address.zipcode}`}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on map
          </a>
        </div>

        <div className="modal-section">
          <h3>Contact</h3>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
        </div>

        <div className="modal-section">
          <h3>Company</h3>
          <p>
            <strong>Name:</strong> {user.company.name}
          </p>
          <p>
            <strong>Catchphrase:</strong> "{user.company.catchPhrase}"
          </p>
          <p>
            <strong>Business:</strong> {user.company.bs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
