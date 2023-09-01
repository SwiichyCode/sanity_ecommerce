import { FormProvider, useForm } from "react-hook-form";
import TextField from "@/app/_components/_atoms/TextField";
import Button from "@/app/_components/_atoms/Button";
import * as S from "./styles";
import TextArea from "@/app/_components/_atoms/TextArea";

type Inputs = {
  email: string;
};

export default function ContactForm() {
  const methods = useForm<Inputs>();
  return (
    <FormProvider {...methods}>
      <S.ContactFormWrapper>
        <TextField labeltext="Email" name="email" />
        <TextArea labeltext="Message" name="message" />
        <Button text="Envoyer" type="submit" />
      </S.ContactFormWrapper>
    </FormProvider>
  );
}
