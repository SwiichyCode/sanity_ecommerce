import Button from "@/app/_components/_atoms/Button";

type Props = {
  handleCloseMenu: () => void;
};

export default function Logout({ handleCloseMenu }: Props) {
  const removeStorage = () => {
    localStorage.removeItem("profile-store");
    localStorage.removeItem("cart-store");
  };

  const handleClick = () => {
    removeStorage();
    handleCloseMenu();
  };

  return (
    <form action="/api/auth/sign-out" method="post">
      <Button type="submit" text="Déconnexion" onClick={handleClick} />
    </form>
  );
}
