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

# Leer el archivo completo
with open(experiencias_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Funcion para generar gallery array
def generate_gallery_array(exp_num):
    images = galleries.get(exp_num, [])[:12]
    if not images:
        return '    gallery: []'
    
    lines = ['    gallery: [']
    for i, img in enumerate(images):
        comma = ',' if i < len(images) - 1 else ''
        lines.append(f'      "{img}"{comma}')
    lines.append('    ]')
    
    return '\n'.join(lines)

# Procesar cada experiencia
updates_count = 0

for slug, exp_num in slug_to_exp.items():
    # Buscar el bloque de experiencia completo basado en el slug
    # Patron: desde { hasta el gallery: [...] que le corresponde
    
    # Buscar la posicion del slug
    slug_pattern = f'slug: "{slug}"'
    slug_pos = content.find(slug_pattern)
    
    if slug_pos == -1:
        print(f"[WARN] No se encontro slug para experiencia {exp_num}")
        continue
    
    # Buscar el gallery: que viene despues del slug
    gallery_start = content.find('gallery:', slug_pos)
    
    if gallery_start == -1:
        print(f"[WARN] No se encontro gallery para experiencia {exp_num}")
        continue
    
    # Encontrar el final del array gallery
    bracket_start = content.find('[', gallery_start)
    if bracket_start == -1:
        continue
    
    bracket_count = 1
    pos = bracket_start + 1
    
    while pos < len(content) and bracket_count > 0:
        if content[pos] == '[':
            bracket_count += 1
        elif content[pos] == ']':
            bracket_count -= 1
        pos += 1
    
    gallery_end = pos
    
    # Extraer el bloque gallery antiguo
    old_gallery = content[gallery_start:gallery_end]
    
    # Generar nuevo gallery
    new_gallery = generate_gallery_array(exp_num)
    
    # Reemplazar en el contenido
    content = content[:gallery_start] + new_gallery + '\n  ' + content[gallery_end:]
    
    updates_count += 1
    print(f"[OK] Actualizada experiencia {exp_num}")

# Escribir el archivo actualizado
with open(experiencias_file, 'w', encoding='utf-8', newline='\n') as f:
    f.write(content)

print(f"\n[OK] Archivo actualizado con {updates_count}/18 experiencias")
print(f"[OK] Guardado en: {experiencias_file}")

# Verificar
print("\n=== Verificacion ===")
for exp_num in sorted(galleries.keys()):
    count = len(galleries[exp_num][:12])
    print(f"Experiencia {exp_num}: {count} imagenes")
