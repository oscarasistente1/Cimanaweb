import Navbar from "../src/components/Navbar";

export default function Contacto() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Contacto</h1>
        <form className="bg-white p-6 rounded shadow-md w-80">
          <input type="text" placeholder="Nombre" className="mb-3 w-full p-2 border rounded" />
          <input type="email" placeholder="Correo" className="mb-3 w-full p-2 border rounded" />
          <textarea placeholder="Mensaje" className="mb-3 w-full p-2 border rounded"></textarea>
          <button type="submit" className="bg-purple-600 text-white p-2 rounded w-full">Enviar</button>
        </form>
      </main>
    </div>
  );
}