"use client";
import React, { useState } from "react";
import Image from "next/image";
import * as S from "./styles";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Dylan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam ultrices, nisl velit ultrices nunc, nec aliquam eros nisl eu nunc. Sed euismod, diam id aliquam ultrices, nisl velit ultrices nunc, nec aliquam eros nisl eu nunc.",
    },
    {
      name: "Fabrice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam ultrices, nisl velit ultrices nunc, nec aliquam eros nisl eu nunc. Sed euismod, diam id aliquam ultrices, nisl velit ultrices nunc, nec aliquam eros nisl eu nunc.",
    },
  ]);
  return (
    <S.TestimonialsWrapper>
      {/* <S.TestimonialsWave position={"top"} /> */}
      <S.TestimonialsCard>
        <S.TestimonialBtn
          onClick={() => {
            if (index === 0) {
              setIndex(testimonials.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <Image src="/left_arrow.svg" width={24} height={24} alt="" />
        </S.TestimonialBtn>
        <S.TestimonialName>{testimonials[index].name}</S.TestimonialName>
        <S.TestimonialBtn
          onClick={() => {
            if (index === testimonials.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <Image src="/right_arrow.svg" width={24} height={24} alt="" />
        </S.TestimonialBtn>
      </S.TestimonialsCard>
      {/* <S.TestimonialsWave position={"bottom"} /> */}
    </S.TestimonialsWrapper>
  );
}
