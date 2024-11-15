import React, { useState } from "react";

function Main() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file); // Crea una URL para la imagen seleccionada
      setPreview(fileUrl); // Almacena la URL en el estado
      console.log("Archivo seleccionado:", file.name);
    }
  };

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          {/* Enlace opcional */}
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
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {/* Sección para previsualizar la imagen */}
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Vista previa:</h3>
          <img
            src={preview}
            alt="Previsualización"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      )}

      <p className="read-the-docs">
        Cristian Jimenez - Osmar Guerra - Santiago Santillan
      </p>
    </>
  );
}

export default Main;
