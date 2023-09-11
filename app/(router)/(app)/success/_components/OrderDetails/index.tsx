"use client";
import { useProfileStore } from "@/app/_modules/auth/profile.store";
import useOrderDetails from "@/app/(router)/(app)/cart/_hooks/useOrderDetails";
import OrderCard from "../OrderCard";

export default function OrderDetail() {
  const { profile } = useProfileStore();
  const isLastOrder = true;
  const { productDetail } = useOrderDetails(profile.id, isLastOrder);

  return <OrderCard productDetail={productDetail} profile={profile} />;
}
