import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container p-6 bg-white shadow-md rounded-lg">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;