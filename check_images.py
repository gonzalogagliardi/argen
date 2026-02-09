import re
import os
import sys
import urllib.parse
from pathlib import Path

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
decoded_refs = {}
for img_path in referenced_images:
    decoded = urllib.parse.unquote(img_path)
    # Extraer número de experiencia
    match = re.match(r'(\d+)', decoded)
    if match:
        exp_num = match.group(1)
        if exp_num not in decoded_refs:
            decoded_refs[exp_num] = []
        decoded_refs[exp_num].append(decoded)

# Obtener archivos existentes
gallery_path = Path('C:/Users/gagli/Desktop/argengoal/public/gallery')
existing_files = {}

for exp_dir in sorted(gallery_path.glob('[0-9][0-9]*')):
    exp_num = exp_dir.name[:2]
    existing_files[exp_num] = []
    for webp_file in exp_dir.glob('*.webp'):
        rel_path = f"{exp_dir.name}/{webp_file.name}"
        existing_files[exp_num].append(rel_path)

# Generar reporte
print("=" * 80)
print("REPORTE DE IMAGENES FALTANTES")
print("=" * 80)
print()

total_missing = 0
total_referenced = 0

for exp_num in sorted(set(list(decoded_refs.keys()) + list(existing_files.keys()))):
    refs = decoded_refs.get(exp_num, [])
    exists = existing_files.get(exp_num, [])
    
    # Crear sets de nombres de archivo para comparación
    ref_files = set(refs)
    exist_files = set(exists)
    
    missing = ref_files - exist_files
    extra = exist_files - ref_files
    
    if missing or not refs:
        print(f"\n{'='*80}")
        print(f"EXPERIENCIA {exp_num}")
        print(f"{'='*80}")
        
        if refs:
            print(f"\nImagenes referenciadas en experiencias.ts: {len(refs)}")
            total_referenced += len(refs)
        else:
            print(f"\nNo hay referencias en experiencias.ts para esta experiencia")
        
        print(f"Imagenes existentes en disco: {len(exists)}")
        
        if missing:
            print(f"\n[!] IMAGENES FALTANTES ({len(missing)}):")
            total_missing += len(missing)
            for img in sorted(missing):
                print(f"   [X] {img}")
        
        if extra and refs:
            print(f"\n[OK] IMAGENES ALTERNATIVAS DISPONIBLES ({len(extra)}):")
            for img in sorted(extra):
                print(f"   [+] {img}")
        elif not refs and exists:
            print(f"\n[OK] IMAGENES DISPONIBLES ({len(exists)}):")
            for img in sorted(exists)[:10]:  # Mostrar solo las primeras 10
                print(f"   [+] {img}")
            if len(exists) > 10:
                print(f"   ... y {len(exists) - 10} mas")

print(f"\n{'='*80}")
print(f"RESUMEN TOTAL")
print(f"{'='*80}")
print(f"Total de imagenes faltantes: {total_missing}")
print(f"Total de experiencias con problemas: {sum(1 for exp_num in decoded_refs if decoded_refs.get(exp_num, set()) - set(existing_files.get(exp_num, [])))}")
print()
