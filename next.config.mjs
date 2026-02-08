/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto genera la carpeta 'out' con HTMLs
  images: {
    unoptimized: true, // Obligatorio para que las fotos se vean en Hostinger sin servidor Node
  },
};

export default nextConfig;