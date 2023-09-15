type Props = {
  text: string;
};

export default function Label({ text }: Props) {
  return <label className="text-base">{text}</label>;
}
