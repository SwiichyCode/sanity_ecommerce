import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ContactGridWrapper = styled.div`
  width: 100%;
  max-width: 68.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21.6rem, 1fr));
  grid-column-gap: 3.2rem;
  grid-row-gap: 3.8rem;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactIconWrapper = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  border-radius: 50%;
  margin-bottom: 2.4rem;
`;

export const ContactIcon = styled(Image)``;

export const ContactTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.8rem;
  margin-bottom: 1.6rem;
`;

export const ContactDescription = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
  color: #556987;
`;

export const ContactSocialList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.4rem;
`;

export const ContactSocialLink = styled(Link)`
  text-decoration: none;
  color: #556987;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-blue);
  }
`;
