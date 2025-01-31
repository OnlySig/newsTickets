import Image from "next/image";
import { ReactNode } from "react";
import imageSrc from "/public/ticketImage.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex items-center max-w-[1320px] mx-auto">
      <div className="w-[40%] h-screen bg-yellow-100 flex flex-col justify-center">
        <Image
          src={imageSrc}
          alt="Imagem de cadastro"
          className="relative -right-14"
        />
      </div>
      {children}
    </section>
  );
}
