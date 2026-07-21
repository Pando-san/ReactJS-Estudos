import React, { useState } from "react";

function Simulado() {
  const [contador, setContador] = useState(0);
  const onSomarHandler = () => {
    setContador((anterior) => anterior + 1);
  };
  return (
    <div>
      <p>Clicamos {contador} vezes</p>
      <button onClick={onSomarHandler(2 * contador + 1)}>Clique aqui!</button>
    </div>
  );
}

export default Simulado;
// Esse codigo vai dar erro de compilação!
