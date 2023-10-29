import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Home() {
  const auth = getAuth();
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>This is Home page</h1>
      <button
        type="button"
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
