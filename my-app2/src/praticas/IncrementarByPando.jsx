import React, { useState } from "react";

function IncrementarNSFW() {
  const [valor, setValor] = useState(0);
  const [mostrarImagem, setMostrarImagem] = useState(false);

  return (
    <>
      <h1>Valor da Variavel: {valor}</h1>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
      <button onClick={() => setValor(valor - 1)}>Decrementar</button>

      {valor === 4 && (
        <>
          <h1>{valor}?! Fica de quatro e relaxa!</h1>
          <button
            className="botao"
            onClick={() => setMostrarImagem(!mostrarImagem)}
          >
            {mostrarImagem
              ? "Voltar a ficar de pé (seu cu ta cheio de gozo agora)"
              : "Ajoelhar e oferecer a bunda"}
          </button>

          {mostrarImagem && (
            <>
              <img
                style={{
                  width: 700,
                }}
                src="https://static1.e621.net/data/sample/7e/60/7e604e009d11687221b7576847aa0018.jpg"
                alt=""
              />
              <h1>Isso mesmo, bom garoto!</h1>
            </>
          )}
        </>
      )}
    </>
  );
}

export default IncrementarNSFW;
