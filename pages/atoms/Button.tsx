import Image from "next/image";
import cn from "classnames";

interface Props {
  text: string;
  icon?: any;
  arrow?: boolean;
  filled?: boolean;
}
export default function Button({ text, icon, arrow, filled }: Props) {
  return (
    <button
      className={cn(
        "font-bold",
        "border-2 rounded",
        "hover:-translate-y-px",
        "px-4 py-3 mx-2 w-full hover:shadow-800",
        "flex gap-2 justify-center items-center",
        "focus:shadow-pinkBorder",
        filled && ["text-white bg-purple border-purple"],
        !filled && [
          "hover:text-white hover:bg-buttonSecondaryBackgroundHover",
          "border-purple-dark",
        ]
      )}
    >
      {icon}
      {text}
      {arrow && (
        <Image src="/arrow_forward.svg" alt="share" width={16} height={16} />
      )}
    </button>
  );
}
