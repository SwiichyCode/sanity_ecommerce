type Props = {
  onSubmit?: any;
  children: React.ReactNode;
};

export default function FormContainer({ onSubmit, children }: Props) {
  return (
    <form className="w-full flex flex-col gap-8" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
