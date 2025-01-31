import FormIn from "@/components/FormIn";

const Signin = () => {
  return (
    <div className="flex flex-col items-center w-[500px] mx-auto max-lg:justify-center max-lg:h-screen max-sm:w-full">
      <div className="w-full">
        <h2 className="text-2xl">Faça o seu login</h2>
        <FormIn />
      </div>
    </div>
  );
};

export default Signin;
