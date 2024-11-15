import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>OCR API</h1>
      <div className="card">
        <button type="submit">Subir imagen</button>
      </div>
      <p className="read-the-docs">Sube tu imagen</p>
    </>
  );
}

export default App;
