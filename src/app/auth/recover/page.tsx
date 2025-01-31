"use client";

import ButtonWithIcon from "@/components/Button";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Recover = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-[500px] max-sm:w-full h-screen justify-center mx-auto ">
      <div className="relative w-full text-center">
        <FaArrowAltCircleLeft
          style={{
            fontSize: "24px",
            position: "absolute",
            left: "0px",
            cursor: "pointer",
            top: "5px",
          }}
          onClick={() => router.push("/auth/signin")}
        />
        <h2 className="text-2xl">Recupere a sua conta</h2>
      </div>
      <input
        type="text"
        placeholder="Digite o seu email"
        className="mt-3 w-full bg-transparent border border-zinc-600 p-2 rounded-lg outline-none hover:shadow-xl focus:shadow-xl transition"
      />
      <ButtonWithIcon text="Recuperar conta" />
    </div>
  );
};

export default Recover;
