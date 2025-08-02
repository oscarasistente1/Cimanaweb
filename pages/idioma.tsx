import Navbar from "../src/components/Navbar";

export default function Idioma() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Selecciona idioma</h1>
        <select className="p-2 border rounded bg-white">
          <option>Español</option>
          <option>Inglés</option>
          <option>Portugués</option>
        </select>
      </main>
    </div>
  );
}