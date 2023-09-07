import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
  /* height: 320px; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--color-white);
  background-color: var(--color-blue);
  padding: 9rem 0;
  margin: 0 auto 9rem auto;
`;

export const TestimonialsWave = styled.div.withConfig({
  shouldForwardProp: (prop) => !["position"].includes(prop),
})<{ position: string }>`
  width: 100%;
  height: 116px;
  position: absolute;
  top: ${({ position }) => position === "top" && "-116px"};
  bottom: ${({ position }) => position === "bottom" && "-116px"};
  left: 0;
  background-image: ${({ position }) => `url(/wave_${position}.svg)`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TestimonialsCard = styled.div`
  width: 100%;
  max-width: 111.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TestimonialName = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const TestimonialBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: 50%;
  border: none;
  padding: 1.2rem;
  cursor: pointer;
`;
