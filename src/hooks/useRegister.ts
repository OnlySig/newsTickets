import { IFormInput } from "@/types/IFormInput";
import toast from "react-hot-toast";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const successRegister = () => toast.success("Cadastrado com sucesso!");
const errorMsg = () => toast.error("Erro ao efetuar cadastro");
const error400 = () => toast.error("Email ja em uso");

const UseRegister = () => {
  const handleFormRegister = async (dados: IFormInput) => {
    try {
      const { ok, status } = await fetch(`${apiUrl}/accounts/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dados.nome,
          email: dados.email,
          phone: dados.telefone,
          password: dados.senha,
        }),
      });
      if (status === 400) {
        error400();
        return true;
      }
      if (!ok) {
        throw new Error("Erro ao cadastrar usuário");
      }
      successRegister();
    } catch (error) {
      errorMsg();
      console.error((error as Error).message);
    }
  };

  return { handleFormRegister };
};

export default UseRegister;
