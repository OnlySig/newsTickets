"use client";
import Input from "../Input";
import { FiUserPlus, FiPhoneForwarded } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import ButtonWithIcon from "../Button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IFormInput } from "@/types/IFormInput";
import UseRegister from "@/hooks/useRegister";
import { useRouter } from "next/navigation";
const styledIcon = {
  fontSize: "24px",
  marginRight: "8px",
};

const FormUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const router = useRouter();
  const { handleFormRegister } = UseRegister();
  const handleForm = async (dados: IFormInput) => {
    const test = await handleFormRegister(dados);
    if (test) return;
    router.push("/auth/signin");
  };
  const senha = watch("senha");
  const validaSenha = {
    required: (value: string) => !!value || "Insira a senha novamente",
    minLength: (value: string) =>
      value.length > 5 || "A senha deve ter pelo menos 6 caracteres",
    equals: (value: string) => value === senha || "As senhas devem ser iguais",
  };
  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="flex justify-center flex-col"
    >
      <div className="flex flex-col gap-2">
        <div>
          <Input
            label="Nome Completo"
            id="nome"
            placeholder="Digite seu nome completo"
            {...register("nome", {
              required: "Campo nome é obrigatório",
              minLength: {
                value: 10,
                message: "Campo nome deve ter pelo menos 10 caracteres",
              },
            })}
            $error={!!errors.nome}
          >
            <FiUserPlus style={styledIcon} />
          </Input>
          <p className="text-red-500 mt-2">
            {errors.nome && errors.nome.message}
          </p>
        </div>
        <div>
          <Input
            label="Email"
            id="email"
            placeholder="Dgite seu email"
            type="email"
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
        <div className="flex gap-2 w-full">
          <div>
            <Input
              label="Senha"
              id="senha"
              placeholder="Digite a sua senha"
              type="password"
              {...register("senha", {
                required: "Campo senha é obrigatório",
                minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres",
                },
              })}
              $error={!!errors.senha}
            >
              <TbLockPassword style={styledIcon} />
            </Input>
            <p className="text-red-500 mt-2">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div>
            <Input
              label="Repetir Senha"
              id="senha2"
              placeholder="Digite sua senha"
              type="password"
              {...register("senhaVerificada", {
                required: "Repita a senha",
                validate: validaSenha,
              })}
              $error={!!errors.senhaVerificada}
            >
              <TbLockPassword style={styledIcon} />
            </Input>
            <p className="text-red-500 mt-2">
              {errors.senhaVerificada && errors.senhaVerificada.message}
            </p>
          </div>
        </div>
        <div>
          <Input
            label="Telefone"
            id="tell"
            placeholder="Ex: DDXXXXXXXXX"
            type="tell"
            {...register("telefone", {
              pattern: {
                value: /^\d{2,3}\d{5}\d{4}$/,
                message: "O telefone inserido está incorreto",
              },
              required: "Campo telefone é obrigatório",
            })}
            $error={!!errors.telefone}
          >
            <FiPhoneForwarded style={styledIcon} />
          </Input>
          <p className="text-red-500 mt-2">
            {errors.telefone && errors.telefone.message}
          </p>
        </div>
      </div>
      <Link href={"/auth/signin"} className="w-fit">
        Ja tem uma conta?
      </Link>
      <ButtonWithIcon type="submit" text="Criar conta" />
    </form>
  );
};

export default FormUp;
