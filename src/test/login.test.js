import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

// Test Cases for Login.js
// Rendering Tests
// Should render the login form with all fields and a submit button.
// Should display a placeholder text for username and password fields.
// Input Field Tests
// Should allow typing in the username field.
// Should allow typing in the password field.
// Should mask the password input as dots or asterisks.
// Validation Tests
// Should display an error message if the username field is left empty.
// Should display an error message if the password field is left empty.
// Should display an error message for invalid username format (e.g., no special characters allowed).
// Should display an error message for invalid password format (e.g., too short).
// Form Submission Tests
// Should call the login handler function when the form is submitted with valid inputs.
// Should prevent form submission if username or password is invalid.
// Should clear input fields after successful login.
// Button Tests
// Should disable the submit button when username or password fields are empty.
// Should enable the submit button when both username and password fields are filled.
// Error Handling Tests
// Should display an error message for incorrect username/password.
// Should handle server errors gracefully (e.g., network issues).
// UI Feedback Tests
// Should show a loading spinner while processing login.
// Should hide the loading spinner after processing completes.
// Edge Case Tests
// Should trim leading and trailing spaces in username and password fields.
// Should handle input of maximum allowed characters in username and password fields.
// Accessibility Tests
// Should allow navigation through the form using the keyboard (e.g., Tab key).
// Should provide proper labels and ARIA attributes for form fields and buttons.
// These test cases ensure comprehensive validation of the Login.js component functionality and user interactions.

describe("Login", () => {
  test("Simple Render", async () => {
    render(<Login />);
    const input_email = await screen.findAllByTestId("input-email");
    // console.log("preset==", input_email.values);
    expect(input_email).tobe;
  });

  test("Test Email Field", async () => {
    render(<Login />);
    const input_email = await screen.findByTestId("input-email");
    fireEvent.change(input_email, { target: { value: "" } });
    const testid = await screen.getByTestId("submit-button");
    fireEvent.click(testid);

    const inputEmail = await screen.getByTestId("input-email");
    fireEvent.change(inputEmail, { target: { value: "abc" } });
    fireEvent.click(testid);
    const error_email = await screen.findByTestId("error-email");
    expect(error_email.textContent).toBe("Email is invalid");
  });

  test("Test Password Field", async () => {
    render(<Login />);
    const input_password = await screen.findByTestId("input-password");
    fireEvent.change(input_password, { target: { value: "" } });
    const testid = await screen.getByTestId("submit-button");
    fireEvent.click(testid);

    const error_password = await screen.findByTestId("error-password");
    expect(error_password.textContent).toBe("Password is required");

    //  const input_password =  screen.getByTestId("input-password")
    // input_password
    fireEvent.change(input_password, { target: { value: "sss" } });
    fireEvent.click(testid);
    expect(error_password.textContent).toBe("Password must be at least 6 characters");
  });

  test("Login check", async () => {
    render(<Login />);
    const input_name = await screen.findByTestId("input-name");
    fireEvent.change(input_name, { target: { value: "John" } });

    const input_email = await screen.findByTestId("input-email");
    fireEvent.change(input_email, { target: { value: "John@gmail.com" } });

    const input_password = await screen.findByTestId("input-password");
    fireEvent.change(input_password, { target: { value: "John16$%" } });
    // console.log("input_password==", input_password);
    const submit_button = await screen.findByTestId("submit-button");
    fireEvent.click(submit_button);
    const message = await screen.findByTestId("login_status");
    // console.log("message",message.textContent)
    expect(message.textContent).toBe("Successful");
  });
});
