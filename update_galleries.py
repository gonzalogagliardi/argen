import os
import json
from urllib.parse import quote
from pathlib import Path
import shutil
from datetime import datetime

# Rutas
base_dir = r"C:\Users\gagli\Desktop\argengoal"
gallery_dir = os.path.join(base_dir, "public", "gallery")
experiencias_file = os.path.join(base_dir, "lib", "experiencias.ts")

# Mapeo de carpetas (nombre de carpeta -> numero de experiencia)
folder_mapping = {
    "01 - Experiencia de un año de jóvenes japoneses en Japó": "01",
    "02 - Experiencia de asesor deportivo japonés en Rosario": "02",
    "03 - Experiencia de 6 meses de jóvenes de Japón en el C": "03",
    "04 - Naoto Hikita experiencia de 2 años en el C A Rosar": "04",
    "05 - Experiencia de un mes del entrenador japonés Ryota": "05",
    "06 - Visita de directivo Japonés a Rosario Central a co": "06",
    "07 - Matías de Bolivia compartiendo entrenamiento y ami": "07",
    "08 - Gerónimo Aguilar de Colombia": "08",
    "09 - Experiencias de jóvenes de Nigeria": "09",
    "10 - Experiencia de joven de ecuador": "10",
    "11 - Nicolás Toledo con Erik Montoya de USA NY De padre": "11",
    "12 - Experiencia de Yoshi y Jochi De República Dominica": "12",
    "13 - Los Profes Arlex y Wilson de Colombia Con un joven": "13",
    "14 - Experiencias de chicos de Monterrey México": "14",
    "15 - Adrian Sánchez en Banfield luego prueba en Riestra": "15",
    "16 - Experiencia de Juan Francisco Acurio en Rosario Ce": "16",
    "17 - Experiencia de Rogelio de Sonora México": "17",
    "18 - Paseo por la ciudad de Rosario experiencia PRO 202": "18"
}

def get_images_for_folder(folder_path, folder_name):
    """Obtiene todas las imagenes .webp de una carpeta"""
    images = []
    
    if os.path.exists(folder_path):
        for file in sorted(os.listdir(folder_path)):
            if file.lower().endswith('.webp'):
                # URL encode correcto para el path
                encoded_folder = quote(folder_name)
                encoded_file = quote(file)
                url = f"/gallery/{encoded_folder}/{encoded_file}"
                images.append(url)
    
    return images

def main():
    # Crear backup
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_file = os.path.join(base_dir, "lib", f"experiencias.ts.backup_{timestamp}")
    shutil.copy2(experiencias_file, backup_file)
    print(f"[OK] Backup creado: {backup_file}")
    
    # Recopilar imagenes por experiencia
    galleries_data = {}
    
    print("\n=== Analisis de carpetas ===\n")
    
    for folder_name, exp_num in sorted(folder_mapping.items(), key=lambda x: x[1]):
        folder_path = os.path.join(gallery_dir, folder_name)
        images = get_images_for_folder(folder_path, folder_name)
        
        galleries_data[exp_num] = images
        
        print(f"Experiencia {exp_num}: {len(images)} imagenes encontradas")
        if len(images) > 0:
            print(f"  Primera: {images[0][:80]}...")
            if len(images) > 1:
                print(f"  Ultima:  {images[-1][:80]}...")
        print()
    
    # Generar reporte JSON
    report = {
        "timestamp": timestamp,
        "galleries": galleries_data
    }
    
    report_file = os.path.join(base_dir, f"gallery_report_{timestamp}.json")
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)
    
    print(f"\n[OK] Reporte generado: {report_file}")
    print("\n=== Resumen ===")
    for exp_num in sorted(galleries_data.keys()):
        count = len(galleries_data[exp_num])
        status = "[OK]" if count >= 12 else "[WARN]"
        print(f"{status} Experiencia {exp_num}: {count} imagenes")

if __name__ == "__main__":
    main()
