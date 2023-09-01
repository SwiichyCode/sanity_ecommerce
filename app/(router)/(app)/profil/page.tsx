"use client";
import ProfileService from "@/app/_modules/auth/profile.service";

export default function ProfilPage() {
  const handleCreateOrder = async () => {
    const { error } = await ProfileService.createOrder({
      product: {
        name: "test 2",
      },
    });
    console.log(error);
  };

  return (
    <div>
      <h1>Profil Page</h1>
      <button onClick={handleCreateOrder}> add</button>
    </div>
  );
}
