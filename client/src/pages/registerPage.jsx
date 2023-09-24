import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration completed. Now you can login");
    } catch (e) {
      alert("Registration failed. Please try again");
    }
  }
  return (
    <div className=" mt-4 grow flex items-center justify-around">
      <div className=" mb-32">
        <h1 className=" text-4xl text-center">Register</h1>
        <form
          className=" max-w-md mx-auto border-gray-300"
          onSubmit={registerUser}
        >
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className=" text-center py-2 text-gray-500">
            Already have an account?{" "}
            <Link className=" font-semibold text-black" to="/login">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
