import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ContactGridWrapper = styled.div`
  width: 100%;
  max-width: 43.063rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.5rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.375rem;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

export const ContactIcon = styled(Image)``;

export const ContactTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.375rem;
  margin-bottom: 1rem;
`;

export const ContactDescription = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.875rem;
  color: #556987;
`;

export const ContactSocialList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const ContactSocialLink = styled(Link)`
  text-decoration: none;
  color: #556987;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-blue);
  }
`;
