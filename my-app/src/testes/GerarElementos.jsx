import React from "react";

export default function GerarElementos() {
  const letras = ["A", "B", "C", " D", "E"];
  const listaLetras = letras.map((p) => <li>{p}</li>);

  return <ul>{listaLetras}</ul>;
}
