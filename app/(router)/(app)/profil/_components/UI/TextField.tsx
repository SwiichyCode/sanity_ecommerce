import Label from "./Label";
import Input from "./Input";

type Props = {
  label: string;
  value: string;
  register?: any;
  registerValue?: string;
  readOnly?: boolean;
};

export default function TextField({
  label,
  value,
  register,
  registerValue,
  readOnly,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Label text={label} />
      <Input
        value={value}
        register={register}
        registerValue={registerValue}
        readOnly={readOnly}
      />
    </div>
  );
}
