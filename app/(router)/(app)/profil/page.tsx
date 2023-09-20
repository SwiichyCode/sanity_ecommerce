import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ProfileContainer from "./_components/container/ProfileContainer";
import OrderInformations from "./_components/OrderInformations";
import ProfileForm from "./_components/modules/form/ProfileForm";
import AccountForm from "./_components/modules/form/AccountForm";

export default async function ProfilPage() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <ProfileContainer>
      <AccountForm user={user} />
      <ProfileForm user={user} />
      <OrderInformations user={user} />
      {/* <OrderInformations profile={profile} /> */}
    </ProfileContainer>
  );
}
