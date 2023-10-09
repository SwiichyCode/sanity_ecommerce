"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import AuthServices from "../_services/auth.service";
import { ResetPasswordDataSchema } from "../_schema/schema";
import { URL_CONSTANT } from "@/app/_constants/url.constant";
import { MESSAGE_CONSTANT } from "@/app/_constants/message.constant";

type Input = z.infer<typeof ResetPasswordDataSchema>;

type Props = {
  formData: Input;
};

export const ResetPasswordAction = async ({ formData }: Props) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const requestUrl = new URL(url);
  const result = ResetPasswordDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = await AuthServices.updatePassword(formData.password);

    if (error) {
      return redirect(
        requestUrl.origin + URL_CONSTANT.RECOVERY + MESSAGE_CONSTANT.RESET_ERROR
      );
    }

    await AuthServices.signout();

    redirect(
      requestUrl.origin + URL_CONSTANT.SIGNIN + MESSAGE_CONSTANT.RESET_SUCCESS
    );
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
