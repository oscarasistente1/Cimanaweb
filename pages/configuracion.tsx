import Navbar from "../src/components/Navbar";

export default function Configuracion() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Configuración</h1>
        <div className="bg-white p-6 rounded shadow-md w-80">
          <p className="text-gray-700">Ajusta tus preferencias y datos personales.</p>
        </div>
      </main>
    </div>
  );
}
