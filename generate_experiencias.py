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

# Leer el archivo experiencias.ts original
with open(experiencias_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Generar nuevo contenido
new_lines = []
current_exp_id = None
in_gallery = False
gallery_depth = 0

i = 0
while i < len(lines):
    line = lines[i]
    
    # Detectar el ID de la experiencia
    id_match = re.search(r'id:\s*"(\d+)"', line)
    if id_match:
        current_exp_id = id_match.group(1)
        new_lines.append(line)
        i += 1
        continue
    
    # Detectar inicio de gallery
    if 'gallery:' in line and current_exp_id:
        # Saltar hasta el final del array gallery actual
        new_lines.append('    gallery: [\n')
        
        # Agregar las nuevas imagenes (maximo 12)
        images = galleries.get(current_exp_id, [])[:12]
        for idx, img in enumerate(images):
            comma = ',' if idx < len(images) - 1 else ''
            new_lines.append(f'      "{img}"{comma}\n')
        
        new_lines.append('    ],\n')
        
        # Saltar el contenido del array gallery antiguo
        bracket_count = 0
        found_start = False
        
        while i < len(lines):
            if '[' in lines[i]:
                bracket_count += lines[i].count('[')
                found_start = True
            if ']' in lines[i]:
                bracket_count -= lines[i].count(']')
            
            i += 1
            
            if found_start and bracket_count == 0:
                break
        
        continue
    
    new_lines.append(line)
    i += 1

# Escribir el archivo actualizado
with open(experiencias_file, 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(new_lines)

print(f"[OK] Archivo actualizado: {experiencias_file}")

# Generar resumen
print("\n=== Resumen de actualizacion ===")
for exp_num in sorted(galleries.keys()):
    total = len(galleries[exp_num])
    selected = min(12, total)
    print(f"Experiencia {exp_num}: {selected}/12 imagenes (total disponible: {total})")
