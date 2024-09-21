import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detalles() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  console.log("id => ", id);

  const dataUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const result = await response.json();
    setUser(result);
  };
  useEffect(() => {
    dataUser();
  }, [id]);
  return (
    <div>
      <h1>Detalles del Usuario {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Sitio Web: {user.website}</p>
    </div>
  );
}
