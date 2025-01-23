import PersonalInfos from "@/components/PersonalInfos";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen p-5">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">Cadastro de Pessoas</h1>
        <Link
          href="http://localhost:3000/users"
          className="bg-[#A3D8FF] p-2 rounded-xl hover:font-bold hover:shadow-lg hover:shadow-[#000] ease-in-out duration-300"
        >
          Listar Usuários
        </Link>
      </header>
      <PersonalInfos />
    </main>
  );
}
