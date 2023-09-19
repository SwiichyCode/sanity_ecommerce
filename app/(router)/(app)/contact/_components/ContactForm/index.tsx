import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "@/app/_components/_atoms/TextField";
import TextArea from "@/app/_components/_atoms/TextArea";
import Button from "@/app/_components/_atoms/Button";
import Message from "@/app/_components/_atoms/Message";
import * as S from "./styles";

type Inputs = {
  email: string;
  name: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const methods = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setSubmitted(true);
      }

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setError(true);
    } finally {
      methods.reset();
    }
  };

  return (
    <FormProvider {...methods}>
      <S.ContactFormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <TextField labeltext="Email" name="email" />
        <TextField labeltext="Nom" name="name" />
        <TextArea labeltext="Message" name="message" />
        <Button text="Envoyer" type="submit" />

        {submitted && (
          <Message type="success" message="Votre message a bien été envoyé" />
        )}

        {error && <Message type="error" message="Une erreur est survenue" />}
      </S.ContactFormWrapper>
    </FormProvider>
  );
}
