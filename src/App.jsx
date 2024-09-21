import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Detalles from "./components/Detalles";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import Administracion from "./components/Administracion";
import Login from "./components/Login";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>rutas-nav</h1>
      <Navbar />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />}
        />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
