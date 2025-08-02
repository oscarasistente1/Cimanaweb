import Navbar from "../src/components/Navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <form className="bg-white p-6 rounded shadow-md w-80">
          <input type="email" placeholder="Correo electrónico" className="mb-3 w-full p-2 border rounded" />
          <input type="password" placeholder="Contraseña" className="mb-3 w-full p-2 border rounded" />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">Entrar</button>
        </form>
      </main>
    </div>
  );
}