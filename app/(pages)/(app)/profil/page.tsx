"use client";
import ProfileService from "./_services/profile.service";

export default function ProfilPage() {
  const handleCreateOrder = async () => {
    const { error } = await ProfileService.createOrder({});
    console.log(error);
  };

  return (
    <div>
      <h1>Profil Page</h1>
      <button onClick={handleCreateOrder}> add</button>
    </div>
  );
}
