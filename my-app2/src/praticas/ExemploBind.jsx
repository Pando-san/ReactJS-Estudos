import React from "react";

class ExemploBind extends React.Component {
  constructor(props) {
    super(props);
    const texto = "Exemplo Bind";
    this.evento = this.evento.bind(this);
  }
  evento() {
    console.log(this); // Vai retornar o OBJETO e não o TEXTO
  }
  render() {
    return <div onClick={this.evento}>Clique Aqui!</div>;
  }
}

export default ExemploBind;
