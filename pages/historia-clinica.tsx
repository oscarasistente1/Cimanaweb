import Navbar from "../src/components/Navbar";

export default function HistoriaClinica() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Historial clínico</h1>
        <div className="bg-white p-6 rounded shadow-md w-80">
          <p className="text-gray-700">Aquí verás tu historial clínico y datos relevantes.</p>
        </div>
      </main>
    </div>
  );
}