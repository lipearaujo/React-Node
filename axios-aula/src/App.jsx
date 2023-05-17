import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-full text-white m-0 p-0">
      <Navbar />
      <div className="max-w-screen-lg py-8 mx-auto px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
