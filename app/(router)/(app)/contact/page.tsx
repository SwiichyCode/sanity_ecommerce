import ContactHeader from "./_components/ContactHeader";
import ContactBody from "./_components/ContactBody";
import { getContact } from "@/sanity/query/contact-query";

export const revalidate = 10;

export default async function ContactPage() {
  const contact = await getContact();

  return (
    <>
      <ContactHeader />
      <ContactBody contact={contact[0]} />
    </>
  );
}
