import { useNavigate, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleClick}>Logout</button>
      <br />
      <Link to="welcome">say welcome</Link>
      <br />
      <Link to="Goodbye">say goodbye</Link>

      <Outlet />
    </div>
  );
};

export default Dashboard;
