import React, { useState } from "react";

export default function TesteContador() {
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h2>Contador: {numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
    </div>
  );
}
