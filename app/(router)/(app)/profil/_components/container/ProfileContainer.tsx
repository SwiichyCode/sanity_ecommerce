type Props = {
  children: React.ReactNode;
};

export default function ProfileContainer({ children }: Props) {
  return (
    <section className="w-full max-w-5xl flex flex-col gap-8 m-auto">
      {children}
    </section>
  );
}
