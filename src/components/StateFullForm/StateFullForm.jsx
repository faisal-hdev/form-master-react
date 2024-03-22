import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
      console.log(email, name, password);
    }
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChanged = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="enter you name"
        />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="enter your email"
          required
        />
        <br />
        <input
          onChange={handlePasswordChanged}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
