import FormUp from "@/components/FormUp";

const Signup = () => {
  return (
    <div className="flex flex-col justify-center w-[500px] max-sm:w-full items-center mx-auto h-screen">
      <h2 className="text-2xl">Crie a sua conta</h2>
      <FormUp />
    </div>
  );
};

export default Signup;
