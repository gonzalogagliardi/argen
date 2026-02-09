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

for exp_dir in sorted(gallery_path.glob('[0-9][0-9]*')):
    exp_num = exp_dir.name[:2]
    for webp_file in exp_dir.glob('*.webp'):
        rel_path = f"{exp_dir.name}/{webp_file.name}"
        existing_files[exp_num].append(rel_path)

# Reporte ejecutivo
print("=" * 100)
print(" " * 30 + "REPORTE DE IMAGENES - EXPERIENCIAS")
print("=" * 100)
print()

total_missing = 0
total_referenced = 0
exp_con_problemas = []

for exp_num in sorted(set(list(decoded_refs.keys()) + list(existing_files.keys()))):
    refs = set(decoded_refs.get(exp_num, []))
    exists = set(existing_files.get(exp_num, []))
    
    missing = refs - exists
    extra = exists - refs
    
    if missing:
        exp_con_problemas.append(exp_num)
        total_missing += len(missing)
        total_referenced += len(refs)
        
        print(f"\n{'='*100}")
        print(f"EXPERIENCIA {exp_num}")
        print(f"{'='*100}")
        
        # Obtener el nombre de la carpeta
        exp_dir = list(gallery_path.glob(f'{exp_num}*'))
        if exp_dir:
            print(f"Carpeta: {exp_dir[0].name}")
        
        print(f"\nEstado:")
        print(f"  - Imagenes referenciadas: {len(refs)}")
        print(f"  - Imagenes en disco: {len(exists)}")
        print(f"  - Imagenes FALTANTES: {len(missing)}")
        print(f"  - Imagenes alternativas: {len(extra)}")
        
        print(f"\n[IMAGENES FALTANTES] ({len(missing)}):")
        for img in sorted(missing):
            filename = img.split('/')[-1]
            print(f"  X {filename}")
        
        if extra:
            print(f"\n[IMAGENES ALTERNATIVAS DISPONIBLES] ({len(extra)}):")
            for img in sorted(extra)[:5]:
                filename = img.split('/')[-1]
                print(f"  + {filename}")
            if len(extra) > 5:
                print(f"  ... y {len(extra) - 5} imagenes mas disponibles")

print(f"\n{'='*100}")
print(" " * 40 + "RESUMEN EJECUTIVO")
print(f"{'='*100}")
print(f"\nExperiencias analizadas: {len(set(list(decoded_refs.keys()) + list(existing_files.keys())))}")
print(f"Experiencias con imagenes faltantes: {len(exp_con_problemas)}")
print(f"Total de imagenes faltantes: {total_missing}")
print(f"\nExperiencias afectadas: {', '.join(exp_con_problemas)}")
print()
print("=" * 100)
