import { ChangeEventHandler, FC } from "react";

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const Input: FC<Props> = (props) => {
  const { onChange, value } = props;

  return (
    <input
      className="rounded p-2 text-base outline outline-1 -outline-offset-1 outline-gray-400"
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};
