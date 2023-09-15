type Props = {
  message: string | null;
};

export default function SuccessMessage({ message }: Props) {
  return <p className=" text-sm font-semibold text-[#00c48c]">{message}</p>;
}
