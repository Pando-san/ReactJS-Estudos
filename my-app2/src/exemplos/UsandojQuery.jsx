import { useEffect, useState } from "react";
import $ from "jquery";

export default function UsandojQuery() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    $.get("https://jsonplaceholder.typicode.com/comments", (data) => {
      setDados(data);
    });
  }, []);

  return (
    <div>
      <h1>Utilizando jQuery Ajax</h1>
      <ul>
        {dados.map((comments) => (
          <li key={comments.id}>
            Post Id
            <p>
              <strong>{comments.name}</strong>
            </p>
            <p>
              <strong>{comments.email}</strong>
            </p>
            <p>
              <strong>{comments.body}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
