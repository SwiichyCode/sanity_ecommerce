"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import AuthServices from "../_services/auth.service";
import { RecoveryDataSchema } from "../_schema/schema";
import { URL_CONSTANT } from "@/app/_constants/url.constant";
import { MESSAGE_CONSTANT } from "@/app/_constants/message.constant";

type Input = z.infer<typeof RecoveryDataSchema>;

type Props = {
  formData: Input;
};

export const RecoveryAction = async ({ formData }: Props) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL!;
  const requestUrl = new URL(url);
  const result = RecoveryDataSchema.safeParse(formData);

  if (result.success) {
    const { error } = await AuthServices.resetPassword(formData.email);

    if (error) {
      return redirect(
        requestUrl.origin +
          URL_CONSTANT.RECOVERY +
          MESSAGE_CONSTANT.RECOVERY_ERROR
      );
    }

    return redirect(
      requestUrl.origin +
        URL_CONSTANT.RECOVERY +
        MESSAGE_CONSTANT.RECOVERY_SUCCESS
    );
  }
};
