import { ChangeEventHandler, FC } from "react";

type Props = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox: FC<Props> = (props) => {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
