"use client";

import { ContactType } from "@/sanity/types/contact-type";
import ContactForm from "../ContactForm";
import ContactGrid from "../ContactGrid";
import * as S from "./styles";

type Props = {
  contact: ContactType;
};

export default function ContactBody({ contact }: Props) {
  return (
    <S.ContactBodyWrapper>
      <ContactGrid contact={contact} />
      <ContactForm />
    </S.ContactBodyWrapper>
  );
}
