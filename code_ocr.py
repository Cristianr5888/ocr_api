!pip install paddlepaddle paddleocr

from paddleocr import PaddleOCR
import cv2
import json
import matplotlib.pyplot as plt
from google.colab import files
import numpy as np
import Levenshtein

# Inicializar OCR
ocr = PaddleOCR(use_angle_cls=True, lang='es')  # Cambia 'es' por 'en' si prefieres inglés

# Diccionario de palabras comunes que deberían tener "Ñ"
diccionario_ñ = ["AÑO", "NUÑEZ", "ZUÑIGA", "MUÑOZ", "IBAÑEZ", "CASTAÑO", "MUÑIZ", "PEÑA", "PIÑA", "OCAÑA", "CASTAÑEDA", "CARREÑO"]



# Función para corregir las palabras detectadas
def corregir_palabras(palabra_detectada):
    # Verificar si la palabra está completamente en mayúsculas
    if palabra_detectada.isupper():
        # Buscar la palabra más cercana del diccionario usando Levenshtein
        palabra_corregida = min(diccionario_ñ, key=lambda x: Levenshtein.distance(palabra_detectada, x))
        
        # Si la distancia es suficientemente pequeña (eligiendo umbral de 2, por ejemplo)
        if Levenshtein.distance(palabra_detectada, palabra_corregida) <= 2:
            return palabra_corregida
    return palabra_detectada

# Función para procesar la imagen y extraer texto
def ocr_imagen():
    # Subir imagen desde el gestor de archivos
    uploaded = files.upload()  # Esto abrirá el gestor de archivos para seleccionar la imagen
    img_path = list(uploaded.keys())[0]  # Obtener la ruta del archivo cargado

    # Leer la imagen
    img = cv2.imread(img_path)
    
    # Realizar detección de texto con PaddleOCR
    results = ocr.ocr(img_path, cls=True)

    # Filtrar resultados y corregir las palabras
    threshold = 0.15
    resultado_corregido = []
    for line in results[0]:
        text, confidence = line[1][0], line[1][1]
        if confidence > threshold:
            texto_corregido = corregir_palabras(text)
            resultado_corregido.append({"text": texto_corregido, "confidence": confidence})

    # Mostrar la imagen con el texto detectado
    plt.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    plt.axis('off')
    plt.show()

    # Retornar el resultado en formato JSON
    return json.dumps(resultado_corregido, ensure_ascii=False)

# Usar la función para procesar la imagen seleccionada
json_resultado = ocr_imagen()
print(json_resultado)

