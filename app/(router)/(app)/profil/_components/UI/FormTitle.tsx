import LineSeparator from "./LineSeparator";

type Props = {
  title: string;
  lineBottom?: boolean;
  lineTop?: boolean;
};

export default function FormTitle({ title, lineBottom, lineTop }: Props) {
  return (
    <>
      {lineTop && <LineSeparator />}
      <h1 className="text-4xl font-bold">{title}</h1>
      {lineBottom && <LineSeparator />}
    </>
  );
}
