"use client";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ContactLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8.8rem 0;
`;

export default function ContactLayout({ children }: Props) {
  return (
    <ContactLayoutWrapper className="responsive-padding">
      {children}
    </ContactLayoutWrapper>
  );
}
