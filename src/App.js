import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase/Firebase.init";

const auth = getAuth(app);
function App() {
  return (
    <div>
      <form>
        <input type="email" name="email" id="" /> <br />
        <input type="password" name="password" id="" /> <br />
        <button type="submit">Register </button>
      </form>
    </div>
  );
}

export default App;
