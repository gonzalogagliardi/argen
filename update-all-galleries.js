const fs = require('fs');

const filePath = './lib/experiencias.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Datos de todas las galerías con 13 imágenes cada una
const galleries = {
  '01': ['022','023','024','025','028','031','034','036','037','038','039','040'].map(n => '/gallery/01%20-%20Experiencia%20de%20un%20a%C3%B1o%20de%20j%C3%B3venes%20japoneses%20en%20Jap%C3%B3/experiencia-de-un-a%C3%B1o-de-j%C3%B3venes-japoneses-en-jap%C3%B3-'+n+'.webp'),
  '02': ['001','004','006','008','014','016','018','019','021','023','025','027','029'].map(n => '/gallery/02%20-%20Experiencia%20de%20asesor%20deportivo%20japon%C3%A9s%20en%20Rosario/experiencia-de-asesor-deportivo-japon%C3%A9s-en-rosario-'+n+'.webp'),
  '03': ['001','002','005','007','009','010','013','014','017','019','022','023','025'].map(n => '/gallery/03%20-%20Experiencia%20de%206%20meses%20de%20j%C3%B3venes%20de%20Jap%C3%B3n%20en%20el%20C/experiencia-de-6-meses-de-j%C3%B3venes-de-jap%C3%B3n-en-el-c-'+n+'.webp'),
  '04': ['012','014','017','018','019','020','024','025','026','027','032','036','037'].map(n => '/gallery/04%20-%20Naoto%20Hikita%20experiencia%20de%202%20a%C3%B1os%20en%20el%20C%20A%20Rosar/naoto-hikita-experiencia-de-2-a%C3%B1os-en-el-c-a-rosar-'+n+'.webp'),
  '05': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/05%20-%20Experiencia%20de%20un%20mes%20del%20entrenador%20japon%C3%A9s%20Ryota/experiencia-de-un-mes-del-entrenador-japon%C3%A9s-ryota-'+n+'.webp'),
  '06': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/06%20-%20Visita%20de%20directivo%20Japon%C3%A9s%20a%20Rosario%20Central%20a%20co/visita-de-directivo-japon%C3%A9s-a-rosario-central-a-co-'+n+'.webp'),
  '07': ['001','002','003','004','005','006','007','009','010','011','012','013','014'].map(n => '/gallery/07%20-%20Mat%C3%ADas%20de%20Bolivia%20compartiendo%20entrenamiento%20y%20ami/mat%C3%ADas-de-bolivia-compartiendo-entrenamiento-y-ami-'+n+'.webp'),
  '08': ['001','002','003','004','005','006','007','008','009','010','012','013','015'].map(n => '/gallery/08%20-%20Ger%C3%B3nimo%20Aguilar%20de%20Colombia/ger%C3%B3nimo-aguilar-de-colombia-'+n+'.webp'),
  '09': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/09%20-%20Experiencias%20de%20j%C3%B3venes%20de%20Nigeria/experiencias-de-j%C3%B3venes-de-nigeria-'+n+'.webp'),
  '10': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/10%20-%20Experiencia%20de%20joven%20de%20ecuador/experiencia-de-joven-de-ecuador-'+n+'.webp'),
  '11': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/11%20-%20Nicol%C3%A1s%20Toledo%20con%20Erik%20Montoya%20de%20USA%20NY%20De%20padre/nicol%C3%A1s-toledo-con-erik-montoya-de-usa-ny-de-padre-'+n+'.webp'),
  '12': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/12%20-%20Experiencia%20de%20Yoshi%20y%20Jochi%20De%20Rep%C3%BAblica%20Dominica/experiencia-de-yoshi-y-jochi-de-rep%C3%BAblica-dominica-'+n+'.webp'),
  '13': ['001','004','011','012','013','014','015','016','017','018','019','020','021'].map(n => '/gallery/13%20-%20Los%20Profes%20Arlex%20y%20Wilson%20de%20Colombia%20Con%20un%20joven/los-profes-arlex-y-wilson-de-colombia-con-un-joven-'+n+'.webp'),
  '14': ['001','002','003','004','005','008','014','015','016','017','018','019','022'].map(n => '/gallery/14%20-%20Experiencias%20de%20chicos%20de%20Monterrey%20M%C3%A9xico/experiencias-de-chicos-de-monterrey-m%C3%A9xico-'+n+'.webp'),
  '15': ['001','002','003','004','005','006','007','008','009','010','011','012','013'].map(n => '/gallery/15%20-%20Adrian%20S%C3%A1nchez%20en%20Banfield%20luego%20prueba%20en%20Riestra/adrian-s%C3%A1nchez-en-banfield-luego-prueba-en-riestra-'+n+'.webp'),
  '16': ['004','005','006','007','008','009','010','011','012','013','014','015','016'].map(n => '/gallery/16%20-%20Experiencia%20de%20Juan%20Francisco%20Acurio%20en%20Rosario%20Ce/experiencia-de-juan-francisco-acurio-en-rosario-ce-'+n+'.webp'),
  '17': ['006','007','008','009','010','011','012','013','014','015','016','017','018'].map(n => '/gallery/17%20-%20Experiencia%20de%20Rogelio%20de%20Sonora%20M%C3%A9xico/experiencia-de-rogelio-de-sonora-m%C3%A9xico-'+n+'.webp'),
  '18': ['005','006','007','008','009','010','011','012','013','014','015','016','017'].map(n => '/gallery/18%20-%20Paseo%20por%20la%20ciudad%20de%20Rosario%20experiencia%20PRO%20202/paseo-por-la-ciudad-de-rosario-experiencia-pro-202-'+n+'.webp')
};

let report = [];
let totalAdded = 0;

// Función para actualizar una galería
function updateGallery(expNum) {
  const slugPatterns = {
    '01': '01-experiencia-de-un-ano-de-jovenes-japoneses-en-japo',
    '02': '02-experiencia-de-asesor-deportivo-japones-en-rosario',
    '03': '03-experiencia-de-6-meses-de-jovenes-de-japon-en-el-c',
    '04': '04-naoto-hikita-experiencia-de-2-anos-en-el-c-a-rosar',
    '05': '05-experiencia-de-un-mes-del-entrenador-japones-ryota',
    '06': '06-visita-de-directivo-japones-a-rosario-central-a-co',
    '07': '07-matias-de-bolivia-compartiendo-entrenamiento-y-ami',
    '08': '08-geronimo-aguilar-de-colombia',
    '09': '09-experiencias-de-jovenes-de-nigeria',
    '10': '10-experiencia-de-joven-de-ecuador',
    '11': '11-nicolas-toledo-con-erik-montoya-de-usa-ny-de-padre',
    '12': '
