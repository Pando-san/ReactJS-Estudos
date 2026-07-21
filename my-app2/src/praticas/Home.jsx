import React from "react";

const Mensagem = () => {
  // Isso é uma arrow function
  console.log("Oinhe! Aqui é o console. Coisas vão aparecer aqui");
};

const Home = () => (
  <div className="home-container">
    <main className="home-content">
      <h1>Olá este é um estudo sobre React!</h1>
      <h2>Aqui é a pagina de inicio e boas-vindas</h2>
      <h4>Clique pra receber um "Oi", no Console</h4>
      <button onClick={Mensagem}>Clique</button>
    </main>
    <footer className="home-footer">
      <img
        src="https://static1.e621.net/data/5b/21/5b21595ab244da44c360bf916cf934cb.gif"
        alt="Dançinha"
        style={{ width: "300px", height: "auto", borderRadius: "8px" }}
      />
    </footer>
  </div>
); // return implicito

export default Home;
