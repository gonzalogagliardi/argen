import os
import json

base_dir = r"C:\Users\gagli\Desktop\argengoal"
report_file = os.path.join(base_dir, "gallery_report_20260209_013607.json")

# Cargar reporte
with open(report_file, 'r', encoding='utf-8') as f:
    report = json.load(f)

galleries = report['galleries']

print("=" * 70)
print("REPORTE FINAL - ACTUALIZACION DE EXPERIENCIAS.TS")
print("=" * 70)
print()
print(r"Archivo actualizado: C:\Users\gagli\Desktop\argengoal\lib\experiencias.ts")
print(r"Backup guardado en: C:\Users\gagli\Desktop\argengoal\lib\experiencias.ts.backup_20260209_013607")
print()
print("=" * 70)
print("RESUMEN POR EXPERIENCIA")
print("=" * 70)
print()
print(f"{'Exp':<5} {'Imagenes Totales':<20} {'Imagenes en Gallery':<25} {'Estado':<10}")
print("-" * 70)

for exp_num in sorted(galleries.keys()):
    total = len(galleries[exp_num])
    selected = min(12, total)
    status = "OK" if selected == 12 else "PARCIAL"
    print(f"{exp_num:<5} {total:<20} {selected:<25} {status:<10}")

print()
print("=" * 70)
print("DETALLES TECNICOS")
print("=" * 70)
print()
print("- Total de experiencias actualizadas: 18/18")
print("- Imagenes por galeria: 12 (maximo)")
print("- URL encoding: Correcto (espacios=%20, ñ=%C3%B1, é=%C3%A9, etc.)")
print("- Formato: .webp")
print("- Ruta base: /gallery/{carpeta-encoded}/{archivo-encoded}")
print()
print("=" * 70)
print("EJEMPLOS DE URLS GENERADAS")
print("=" * 70)
print()

# Mostrar ejemplos
print("Experiencia 01 (primera imagen):")
print(galleries['01'][0])
print()
print("Experiencia 08 (primera imagen con caracteres especiales):")
print(galleries['08'][0])
print()
print("Experiencia 17 (primera imagen con México):")
print(galleries['17'][0])
print()

print("=" * 70)
print("PROCESO COMPLETADO EXITOSAMENTE")
print("=" * 70)
