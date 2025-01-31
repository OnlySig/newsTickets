import { ReactNode } from "react";

const ButtonWithIcon = ({
  children,
  text,
  type = "button",
}: {
  children?: ReactNode;
  text: string;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      type={type}
      className="w-full rounded-3xl bg-blue-600 text-white text-center h-10 mt-7"
    >
      {text}
      {children}
    </button>
  );
};

export default ButtonWithIcon;
