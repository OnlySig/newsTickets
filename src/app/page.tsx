import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4 items-center justify-center h-full">
      <Link
        href={"/auth/signup"}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Cadastro
      </Link>
      <Link
        href={"/auth/signin"}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
      >
        Entrar
      </Link>
    </div>
  );
}
