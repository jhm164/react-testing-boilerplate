import React, { useState } from "react";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
          message:""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
       message:"Successful"
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h2 data-testid="form-title">React Form</h2>
      <form onSubmit={handleSubmit} data-testid="form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            data-testid="input-name"
          />
          {errors.name && <span data-testid="error-name">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            data-testid="input-email"
          />
          {errors.email && (
            <span data-testid="error-email">{errors.email}</span>
          )}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            data-testid="input-password"
          />
          {errors.password && (
            <span data-testid="error-password">{errors.password}</span>
          )}
        </div>

        <button type="submit" data-testid="submit-button">
          Submit
        </button>
        <p data-testid="login_status" >{formData.message}</p>
      </form>
    </div>
  );
}
