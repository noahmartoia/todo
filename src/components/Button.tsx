import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{ onClick: () => void }>;

export const Button: FC<Props> = (props) => {
  const { children, onClick } = props;

  return (
    <button
      className="rounded bg-blue-500 p-3 text-base leading-none text-white shadow-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
