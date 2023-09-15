import ProfileContainer from "./_components/container/ProfileContainer";
import OrderInformations from "./_components/OrderInformations";
import ProfileForm from "./_components/modules/form/ProfileForm";
import AccountForm from "./_components/modules/form/AccountForm";

export default function ProfilPage() {
  return (
    <ProfileContainer>
      <AccountForm />
      <ProfileForm />

      {/* <OrderInformations profile={profile} /> */}
    </ProfileContainer>
  );
}
