import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const [errors, setErrors] = useState(""); // ✅ renamed to match requirement

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Explicit validation checks
    if (!username) {
      setErrors("Username is required!");
      return;
    }
    if (!email) {
      setErrors("Email is required!");
      return;
    }
    if (!password) {
      setErrors("Password is required!");
      return;
    }

    setErrors("");

    console.log("User registered:", formData);
    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        {/* ✅ use errors */}
        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
