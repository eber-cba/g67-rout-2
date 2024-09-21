import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Users() {
  const [users, setUsers] = useState([]); //arreglo de usuarios donde guarderemos la data
  const navigate = useNavigate(); // hook para la navegacio

  const dataUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    dataUsers();
  }, []);
  console.log("users", users);

  const handleClick = (id) => {
    navigate(`/detalles/${id}`);
  };
  return (
    <div>
      <h1>lista de Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleClick(user.id)}>Detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
