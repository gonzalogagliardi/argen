/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Esto genera la carpeta 'out' con HTMLs
  images: {
    unoptimized: true, // Obligatorio para que las fotos se vean en Hostinger sin servidor Node
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  turbopack: {
    root: '.',
  },
};

export default nextConfig;