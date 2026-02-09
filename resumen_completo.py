import re
import sys
import urllib.parse
from pathlib import Path
from collections import defaultdict

# Configurar encoding para Windows
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')

# Leer el archivo experiencias.ts
with open('C:/Users/gagli/Desktop/argengoal/lib/experiencias.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extraer todas las rutas de imágenes
image_pattern = r'/gallery/([^"\']+\.webp)'
referenced_images = re.findall(image_pattern, content)

# Decodificar URL encoding
decoded_refs = defaultdict(list)
for img_path in referenced_images:
    decoded = urllib.parse.unquote(img_path)
    match = re.match(r'(\d+)', decoded)
    if match:
        exp_num = match.group(1)
        decoded_refs[exp_num].append(decoded)

# Obtener archivos existentes
gallery_path = Path('C:/Users/gagli/Desktop/argengoal/public/gallery')
existing_files = defaultdict(list)
dir_names = {}

for exp_dir in sorted(gallery_path.glob('[0-9][0-9]*')):
    exp_num = exp_dir.name[:2]
    dir_names[exp_num] = exp_dir.name
    for webp_file in exp_dir.glob('*.webp'):
        rel_path = f"{exp_dir.name}/{webp_file.name}"
        existing_files[exp_num].append(rel_path)

# Análisis completo
exp_ok = []
exp_con_problemas = []
detalles = {}

for exp_num in sorted(set(list(decoded_refs.keys()) + list(existing_files.keys()))):
    refs = set(decoded_refs.get(exp_num, []))
    exists = set(existing_files.get(exp_num, []))
    
    missing = refs - exists
    extra = exists - refs
    
    detalles[exp_num] = {
        'refs': len(refs),
        'exists': len(exists),
        'missing': len(missing),
        'extra': len(extra),
        'missing_files': sorted(missing),
        'extra_files': sorted(extra)
    }
    
    if missing:
        exp_con_problemas.append(exp_num)
    else:
        exp_ok.append(exp_num)

# Reporte
print("=" * 100)
print(" " * 35 + "RESUMEN COMPLETO DE IMAGENES")
print("=" * 100)
print()

print("EXPERIENCIAS SIN PROBLEMAS (Imagenes correctas):")
print("-" * 100)
for exp_num in exp_ok:
    d = detalles[exp_num]
    nombre = dir_names.get(exp_num, f"Experiencia {exp_num}")
    print(f"\n[{exp_num}] {nombre}")
    print(f"     Imagenes: {d['refs']} referenciadas, {d['exists']} en disco")
    if d['extra'] > 0:
        print(f"     Nota: Hay {d['extra']} imagenes adicionales disponibles en disco")

print(f"\n\n{'='*100}")
print(f"EXPERIENCIAS CON PROBLEMAS (Imagenes faltantes: {len(exp_con_problemas)}):")
print("-" * 100)

for exp_num in exp_con_problemas:
    d = detalles[exp_num]
    nombre = dir_names.get(exp_num, f"Experiencia {exp_num}")
    print(f"\n[{exp_num}] {nombre}")
    print(f"     Referencias: {d['refs']} | En disco: {d['exists']} | FALTAN: {d['missing']} | Alternativas: {d['extra']}")

print(f"\n\n{'='*100}")
print(" " * 38 + "ESTADISTICAS GLOBALES")
print("=" * 100)
total_refs = sum(detalles[exp]['refs'] for exp in detalles)
total_exists = sum(detalles[exp]['exists'] for exp in detalles)
total_missing = sum(detalles[exp]['missing'] for exp in detalles)
total_extra = sum(detalles[exp]['extra'] for exp in detalles)

print(f"\nTotal de experiencias analizadas: {len(detalles)}")
print(f"Experiencias OK: {len(exp_ok)}")
print(f"Experiencias con problemas: {len(exp_con_problemas)}")
print(f"\nTotal imagenes referenciadas en codigo: {total_refs}")
print(f"Total imagenes disponibles en disco: {total_exists}")
print(f"Total imagenes FALTANTES: {total_missing}")
print(f"Total imagenes alternativas disponibles: {total_extra}")
print()
print("=" * 100)
