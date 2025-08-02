import Navbar from "../src/components/Navbar";
import ConnieAssistant from "../src/components/ConnieAssistant";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Bienvenido a CIMANA</h1>
        <p className="text-lg text-gray-700 mb-4">
          Accede a tu historial clínico, agenda turnos y consulta noticias.
        </p>
      </main>
      <ConnieAssistant />
    </div>
  );
}