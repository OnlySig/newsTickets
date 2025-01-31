import { forwardRef, ReactNode } from "react";

type Props = {
  type?: string;
  id: string;
  placeholder: string;
  children: ReactNode;
  label: string;
  $error: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { type = "text", placeholder, children, id, label, $error, ...rest },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="w-fit" htmlFor={id}>
          {label}
        </label>
        <div
          className={`flex bg-transparent p-2 rounded-lg border hover:shadow-xl focus-within:shadow-xl transition ${
            $error ? "border-red-500" : "border-zinc-600"
          }`}
        >
          <label htmlFor={id}>{children}</label>
          <input
            className="w-full bg-transparent outline-none"
            type={type}
            id={id}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
