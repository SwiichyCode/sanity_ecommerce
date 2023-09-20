type Props = {
  onSubmit?: any;
  children: React.ReactNode;
  action?: any;
  method?: any;
};

export default function FormContainer({ onSubmit, children }: Props) {
  return (
    <form className="w-full flex flex-col gap-8" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
