type Props = {
  value: string;
  register?: any;
  registerValue?: string;
  readOnly?: boolean;
};

export default function Input({
  value,
  register,
  registerValue,
  readOnly,
}: Props) {
  return (
    <input
      className="text-base font-medium focus:outline-none"
      defaultValue={value}
      size={value.length + 8}
      readOnly={readOnly}
      {...register?.(registerValue)}
    />
  );
}
