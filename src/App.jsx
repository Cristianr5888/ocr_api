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
        <label htmlFor="fileInput" className="custom-button">
          Subir imagen
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              console.log("Archivo seleccionado:", file.name);
            }
          }}
        />
      </div>

      <p className="read-the-docs">
        Cristian Jimenez - Osmar Guerra - Santiago Santillan
      </p>
    </>
  );
}

export default App;
