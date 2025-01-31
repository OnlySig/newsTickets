import toast from "react-hot-toast";
const successLogin = () => toast.success("Login feito com sucesso!");
const loading = () => toast.loading("Carregando...");
const errorMsg = () => toast.error("Erro ao efetuar login");
const errorLogin = () => toast.error("email ou senha inválidos");
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const useLogin = () => {
  const handleFormLogin = async (dados: { email: string; senha: string }) => {
    try {
      loading();
      const response = await fetch(`${apiUrl}/accounts/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dados.email,
          password: dados.senha,
        }),
      });
      if (response.status === 400) {
        errorLogin();
        return true;
      }
      if (!response.ok) {
        throw new Error(
          `Um erro foi detectado, status code: ${response.status}`
        );
      }
      successLogin();
      const data = await response.json();
      sessionStorage.setItem("access-token", JSON.stringify(data.token));
      sessionStorage.setItem("refresh-token", JSON.stringify(data.refresh));
    } catch (error) {
      errorMsg();
      console.error((error as Error).message);
    }
  };
  return {
    handleFormLogin,
  };
};

export default useLogin;
