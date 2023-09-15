import Button from "@/app/_components/_atoms/Button";

type Props = {
  handleCloseMenu: () => void;
};

export default function Logout({ handleCloseMenu }: Props) {
  return (
    <form action="/api/auth/sign-out" method="post">
      <Button type="submit" text="Déconnexion" onClick={handleCloseMenu} />
    </form>
  );
}
