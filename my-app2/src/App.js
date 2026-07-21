import Incrementar from "./exemplos/Incrementar";
import IncrementarNSFW from "./praticas/IncrementarByPando";
import UsandoHookUseState from "./exemplos/UsandoHookUseState";
import UsandoHookUseEffect from "./exemplos/UsandoHookUseEffect";
import "./App.css";
import UsandoFetchAPI from "./exemplos/UsandoFetchAPI";
import UsandoAxios from "./exemplos/UsandoAxios";
import UsandojQuery from "./exemplos/UsandojQuery";
import UsandoFetchAPIByPando from "./praticas/UsandoFetchAPIByPando";
import Home from "./praticas/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import User from "./components/User";
import ExemploBind from "./praticas/ExemploBind";
import { Routes, Route, Link } from "react-router-dom";
import Simulado from "./praticas/Simulado";

function App() {
  return (
    <>
      <header>
        <h1>Ensine-me React</h1>
        <nav>
          <Link to="/">Home</Link> | {""}
          <Link to="/hookUseState">Página 1</Link> | {""}
          <Link to="/increment">Página 2</Link> | {""}
          <Link to="/hookUseEffect">Página 3</Link> | {""}
          <Link to="/fetch">Página 4</Link> | {""}
          <Link to="/axios">Página 5</Link> | {""}
          <Link to="/jQuery">Página 6</Link> | {""}
          <Link to="/incrementNSFW">Página 7</Link> | {""}
          <Link to="/fetchByPando">Página 8</Link> | {""}
          <Link to="/login">Login</Link> | {""}
          <Link to="/logout">Logout</Link> | {""}
          <Link to="/user">Usuário</Link> | {""}
          <Link to="/bind">ExemploBind</Link> | {""}
          <Link to="/simulado">Simulado</Link>
        </nav>
      </header>
      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="hookUseState" element={<UsandoHookUseState />} />
          <Route path="increment" element={<Incrementar />} />
          <Route path="hookUseEffect" element={<UsandoHookUseEffect />} />
          <Route path="fetch" element={<UsandoFetchAPI />} />
          <Route path="axios" element={<UsandoAxios />} />
          <Route path="jQuery" element={<UsandojQuery />} />
          <Route path="incrementNSFW" element={<IncrementarNSFW />} />
          <Route path="fetchByPando" element={<UsandoFetchAPIByPando />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="user" element={<User />} />
          <Route path="bind" element={<ExemploBind />} />
          <Route path="simulado" element={<Simulado />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
