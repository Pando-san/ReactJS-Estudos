import React from "react";

export default function TesteCarros() {
  const carros = ["Strada", "HB20", "Mobi", "Onix"];
  return (
    <ul>
      {carros.map((carro, index) => (
        <li key={index}>{carro}</li>
      ))}
    </ul>
  );
}
