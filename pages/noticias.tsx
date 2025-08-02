import Navbar from "../src/components/Navbar";

export default function Noticias() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Noticias</h1>
        <div className="bg-white p-6 rounded shadow-md w-80">
          <p className="text-gray-700">Mantente informado sobre las últimas novedades de CIMANA.</p>
        </div>
      </main>
    </div>
  );
}