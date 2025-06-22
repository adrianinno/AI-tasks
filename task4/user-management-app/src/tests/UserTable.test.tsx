import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserTable from "../components/UserTable";
import type { User } from "../types/user";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

describe("UserTable", () => {
  it("renders user data correctly", () => {
    render(<UserTable users={mockUsers} setUsers={vi.fn()} />);
    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
  });

  it("calls setUsers when a user is deleted", () => {
    const setUsers = vi.fn();
    render(<UserTable users={mockUsers} setUsers={setUsers} />);

    const deleteButtons = screen.getAllByText("×");
    fireEvent.click(deleteButtons[0]);

    expect(setUsers).toHaveBeenCalledWith(
      mockUsers.filter((u) => u.id !== mockUsers[0].id)
    );
  });

  it("opens the modal when a user row is clicked", () => {
    render(<UserTable users={mockUsers} setUsers={vi.fn()} />);

    const userRow = screen.getByText("Leanne Graham").closest("tr");
    if (userRow) {
      fireEvent.click(userRow);
    }

    expect(
      screen.getByRole("heading", { name: "Leanne Graham" })
    ).toBeInTheDocument();
  });
});
