import cn from "classnames";

interface Props {
  text?: string;
  size?: "sm" | "base" | "lg" | "xl";
  onClick?: () => void;
}

export default function ZooplaLink({
  text = "link",
  size = "base",
  onClick = () => {},
}: Props) {
  return (
    <a
      href="#"
      className={cn(
        `text-${size}`,
        `text-linkText hover:text-linkText-hover active:text-linkText-active disabled:text-linkText-disabled`,
        `hover:underline decoration-linkUnderline decoration-solid decoration-2 decoration-off underline-offset-2`
      )}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
