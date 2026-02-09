import os
import json
import re

base_dir = r"C:\Users\gagli\Desktop\argengoal"
experiencias_file = os.path.join(base_dir, "lib", "experiencias.ts")
report_file = os.path.join(base_dir, "gallery_report_20260209_013607.json")

# Cargar el reporte de galerias
with open(report_file, 'r', encoding='utf-8') as f:
    report = json.load(f)

galleries = report['galleries']

# Mapeo de slug a experiencia
slug_to_exp = {
    "01-experiencia-de-un-ano-de-jovenes-japoneses-en-japo": "01",
    "02-experiencia-de-asesor-deportivo-japones-en-rosario": "02",
    "03-experiencia-de-6-meses-de-jovenes-de-japon-en-el-c": "03",
    "04-naoto-hikita-experiencia-de-2-anos-en-el-c-a-rosar": "04",
    "05-experiencia-de-un-mes-del-entrenador-japones-ryota": "05",
    "06-visita-de-directivo-japones-a-rosario-central-a-co": "06",
    "07-matias-de-bolivia-compartiendo-entrenamiento-y-ami": "07",
    "08-geronimo-aguilar-de-colombia": "08",
    "09-experiencias-de-jovenes-de-nigeria": "09",
    "10-experiencia-de-joven-de-ecuador": "10",
    "11-nicolas-toledo-con-erik-montoya-de-usa-ny-de-padre": "11",
    "12-experiencia-de-yoshi-y-jochi-de-republica-dominica": "12",
    "13-los-profes-arlex-y-wilson-de-colombia-con-un-joven": "13",
    "14-experiencias-de-chicos-de-monterrey-mexico": "14",
    "15-adrian-sanchez-en-banfield-luego-prueba-en-riestra": "15",
    "16-experiencia-de-juan-francisco-acurio-en-rosario-ce": "16",
    "17-experiencia-de-rogelio-de-sonora-mexico": "17",
    "18-paseo-por-la-ciudad-de-rosario-experiencia-pro-202": "18"
}

# Leer el archivo
with open(experiencias_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Procesar linea por linea
new_lines = []
current_exp_num = None
i = 0

while i < len(lines):
    line = lines[i]
    
    # Detectar slug para identificar experiencia
    slug_match = re.search(r'slug:\s*"([^"]+)"', line)
    if slug_match:
        slug = slug_match.group(1)
        if slug in slug_to_exp:
            current_exp_num = slug_to_exp[slug]
            print(f"Encontrada experiencia {current_exp_num} en linea {i+1}")
    
    # Si encontramos gallery: y tenemos una experiencia identificada
    if 'gallery:' in line and current_exp_num:
        print(f"  Actualizando gallery en linea {i+1}")
        
        # Escribir el nuevo array gallery
        new_lines.append('    gallery: [\n')
        
        images = galleries.get(current_exp_num, [])[:12]
        for idx, img in enumerate(images):
            comma = ',' if idx < len(images) - 1 else ''
            new_lines.append(f'      "{img}"{comma}\n')
        
        new_lines.append('    ]\n')
        
        # Saltar el array gallery antiguo
        bracket_count = 0
        found_bracket = False
        
        i += 1
        while i < len(lines):
            if '[' in lines[i]:
                bracket_count += 1
                found_bracket = True
            if ']' in lines[i]:
                bracket_count -= 1
            
            if found_bracket and bracket_count == 0:
                i += 1
                break
            i += 1
        
        # Reset la experiencia actual
        current_exp_num = None
        continue
    
    new_lines.append(line)
    i += 1

# Escribir archivo actualizado
with open(experiencias_file, 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(new_lines)

print(f"\n[OK] Archivo actualizado: {experiencias_file}")
