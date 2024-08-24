import { Selects } from "./components/Selects";

const App = () => {
  return (
    <>
      <nav className="containerTitle">
        <h1>Aprendizaje React</h1>
        <p>Selects Anidados</p>
      </nav>
      <div className="containerSelect">
        <h2 className="subtitle">lugar de residencia</h2>
        <Selects />
      </div>
    </>
  );
};

export default App;
