import { useEffect, useState } from "react";

export default function UsandoFetchAPIByPando() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      });
  }, []);

  return (
    <div>
      <h1>Pratica: Usando Fetch API</h1>
      <ul>
        {dados && (
          <li key={dados.id}>
            <strong>Nome: </strong> {dados.name}
            <p>
              <strong>Sobrenome: </strong>
              {dados.username}
            </p>
            <p>
              <strong>Email: </strong>
              {dados.email}
            </p>
            <p>
              <strong>Endereço: </strong>
              {dados.address.street}
            </p>
            <p>
              <strong>Número</strong>
              {dados.address.suite}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
