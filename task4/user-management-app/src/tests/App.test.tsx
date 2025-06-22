import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";
import * as userService from "../services/userService";
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
];

describe("App", () => {
  it("renders loading state initially", () => {
    vi.spyOn(userService, "fetchUsers").mockImplementation(
      () => new Promise(() => {})
    );
    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state on fetch failure", async () => {
    vi.spyOn(userService, "fetchUsers").mockRejectedValueOnce(
      new Error("Failed to fetch")
    );
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
    });
  });

  it("renders user table on fetch success", async () => {
    vi.spyOn(userService, "fetchUsers").mockResolvedValueOnce(mockUsers);
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
      expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
    });
  });
});
