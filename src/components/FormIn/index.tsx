"use client";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Link from "next/link";
import ButtonWithIcon from "../Button";
import useLogin from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

type FormInputTypes = {
  email: string;
  senha: string;
};
const styledIcon = {
  fontSize: "24px",
  marginRight: "8px",
};

const FormIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputTypes>();
  const { handleFormLogin } = useLogin();
  const handleForm = async (dados: FormInputTypes) => {
    const test = await handleFormLogin(dados);
    console.log(test);
    if (test) return;
    router.push("/");
  };
  return (
    <form
      className="flex flex-col justify-center w-full"
      onSubmit={handleSubmit(handleForm)}
    >
      <div>
        <Input
          label="Email"
          id="email"
          placeholder="Digite seu email"
          {...register("email", {
            required: "Campo email é obrigatório",
            minLength: {
              value: 10,
              message: "Campo email deve ter pelo menos 10 caracteres",
            },
          })}
          $error={!!errors.email}
        >
          <MdOutlineEmail style={styledIcon} />
        </Input>
        <p className="text-red-500 mt-2">
          {errors.email && errors.email.message}
        </p>
      </div>
      <div>
        <Input
          label="Senha"
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          {...register("senha", {
            required: "Campo senha é obrigatório",
            minLength: {
              value: 6,
              message: "Campo senha deve ter pelo menos 6 caracteres",
            },
          })}
          $error={!!errors.senha}
        >
          <TbLockPassword style={styledIcon} />
        </Input>
        <p className="text-red-500 mt-2">
          {errors.senha && errors.senha.message}
        </p>
      </div>
      <div className="flex justify-between">
        <Link href={"/auth/signup"}>Não tem uma conta?</Link>
        <Link href={"/auth/recover"}>Esqueceu sua senha?</Link>
      </div>
      <ButtonWithIcon type="submit" text="Logar" />
    </form>
  );
};

export default FormIn;
