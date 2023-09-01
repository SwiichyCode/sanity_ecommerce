import ContactForm from "../ContactForm";
import ContactGrid from "../ContactGrid";
import * as S from "./styles";

export default function ContactBody() {
  return (
    <S.ContactBodyWrapper>
      <ContactGrid />
      <ContactForm />
    </S.ContactBodyWrapper>
  );
}
