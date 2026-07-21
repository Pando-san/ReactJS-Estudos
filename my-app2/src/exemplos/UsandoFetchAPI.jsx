import { useEffect, useState } from "react";

export default function UsandoFetchAPI() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      });
  }, []);

  return (
    <div>
      <h1>Utilizando Fetch API</h1>
      <ul>
        {dados.map((usuario) => (
          <li key={usuario.id}>
            <strong>Nome:{usuario.name}</strong>
            <p>Sobrenome:{usuario.username}</p>
            <p>Email:{usuario.email}</p>
            <p>Endereço:{usuario.address.street}</p>
            <p>Número:{usuario.address.suite}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
