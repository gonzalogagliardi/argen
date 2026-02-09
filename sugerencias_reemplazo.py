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

print("=" * 100)
print(" " * 30 + "SUGERENCIAS DE REEMPLAZO DE IMAGENES")
print("=" * 100)
print()
print("A continuacion se listan las imagenes faltantes y sugerencias de reemplazo disponibles")
print("en cada carpeta. Puedes usar estas alternativas para actualizar experiencias.ts")
print()

for exp_num in sorted(decoded_refs.keys()):
    refs = set(decoded_refs.get(exp_num, []))
    exists = set(existing_files.get(exp_num, []))
    
    missing = sorted(refs - exists)
    extra = sorted(exists - refs)
    
    if missing:
        print("=" * 100)
        print(f"EXPERIENCIA {exp_num}: {dir_names.get(exp_num, 'N/A')}")
        print("=" * 100)
        
        print(f"\nImagenes FALTANTES ({len(missing)}):")
        for i, img in enumerate(missing, 1):
            filename = img.split('/')[-1]
            # Extraer numero de la imagen
            num_match = re.search(r'-(\d+)\.webp$', filename)
            if num_match:
                num = num_match.group(1)
                print(f"  {i}. {filename} (numero {num})")
            else:
                print(f"  {i}. {filename}")
        
        if extra:
            print(f"\nImagenes ALTERNATIVAS disponibles ({len(extra)}):")
            for i, img in enumerate(extra[:15], 1):  # Mostrar max 15
                filename = img.split('/')[-1]
                num_match = re.search(r'-(\d+)\.webp$', filename)
                if num_match:
                    num = num_match.group(1)
                    print(f"  {i}. {filename} (numero {num})")
                else:
                    print(f"  {i}. {filename}")
            
            if len(extra) > 15:
                print(f"  ... y {len(extra) - 15} imagenes mas")
            
            print("\nSUGERENCIA: Reemplaza las imagenes faltantes en experiencias.ts")
            print(f"usando las alternativas disponibles de la carpeta:")
            print(f"  public/gallery/{dir_names.get(exp_num, exp_num)}/")
        
        print()

print("=" * 100)
print("INSTRUCCIONES:")
print("=" * 100)
print("1. Edita el archivo: C:/Users/gagli/Desktop/argengoal/lib/experiencias.ts")
print("2. Busca las rutas de imagenes faltantes (formato URL encoded)")
print("3. Reemplazalas con las rutas de las imagenes alternativas")
print("4. Recuerda que las rutas en experiencias.ts usan URL encoding (%20, %C3%B1, etc.)")
print()
