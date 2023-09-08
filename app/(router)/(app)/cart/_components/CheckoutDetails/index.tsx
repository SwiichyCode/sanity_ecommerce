"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useCartStore } from "@/app/(router)/(app)/cart/_stores/cart.store";
import { useProfile } from "@/app/_modules/auth/useProfile";
import {
  ProfileType,
  ProfileFormType,
} from "@/app/_modules/auth/_types/profile.type";
import CheckoutDetailForm from "./Form";
import Summary from "@/app/(router)/(app)/cart/_components/Summary";
import * as S from "./styles";

type Inputs = Partial<ProfileType>;

type Props = {
  user?: any;
};

export default function CheckoutDetails({ user }: Props) {
  const { cart } = useCartStore();
  const { user: User, profile, createProfile, updateProfile } = useProfile();
  const methods = useForm<Inputs>();
  const { reset } = methods;
  const router = useRouter();

  useEffect(() => {
    reset(profile);
  }, [profile]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      if (!profile?.lastname) {
        createProfile({
          id: User?.id,
          ...(data as ProfileFormType),
        });
      } else {
        updateProfile(data as ProfileType);
      }

      const lineItems = cart?.map(
        ({ price, quantity, name, description, images, id, sizes }) => ({
          price_data: {
            product_data: {
              name: sizes ? `${name} (${sizes}cm)` : name,
              description: description,
              images: [images],

              metadata: {
                productId: id,
                size: sizes ? `${sizes}cm` : null,
              },
            },
            currency: "eur",
            unit_amount: price * 100,
          },
          quantity: quantity,
        })
      );

      const res = await fetch("/api/stripe-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems, userId: User?.id }),
      });

      const checkoutSession = await res.json();

      if (checkoutSession.statusCode === 500) {
        throw new Error(checkoutSession.message);
      }

      router.push(checkoutSession.session.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <S.CheckoutDetailsFormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <CheckoutDetailForm user={User} profile={profile} />

        <Summary user={user} />
      </S.CheckoutDetailsFormWrapper>
    </FormProvider>
  );
}
