import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // Success...
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        // Error
        console.log(error);
      });
  }
  return (
    <div>
      <h1>This is Sign up page</h1>
      <form action="">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="password"
        />
        <button
          type="button"
          onClick={(e) => {
            handleSignUp(e);
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
