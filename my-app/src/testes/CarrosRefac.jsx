import React from "react";

export default function GerarElementos(props) {
  const elementos = props.arrayElementos;
  const listaElementos = elementos.map((e) => <li key={e.toString()}>{e}</li>);

  return <ul>{listaElementos}</ul>;
}
