import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-indigo-600 p-4 rounded-lg shadow-md">
      <nav className="flex justify-between items-center">
        <NavLink to="/">
          <img alt="MongoDB logo" className="h-10 inline" src="https://raw.githubusercontent.com/mongodb-developer/mern-stack-example/603144e25ba5549159d1962601337652a7bfa253/mern/client/src/assets/mongodb.svg"></img>
        </NavLink>

        <NavLink className="btn" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}