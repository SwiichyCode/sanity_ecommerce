import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import * as S from "./styles";

type Props = {
  category?: any;
  selectedCategory?: any;
  setSelectedCategory?: any;
};

export default function Dropdown({
  category,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, (e) => handleClickOutside(e));

  const handleClickOutside = (e: any) => {
    const target = e.target;

    if (
      target.className &&
      typeof target.className.includes !== "undefined" &&
      target.className.includes("dropdown-btn")
    ) {
      return;
    }

    setIsOpen(false);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <S.DropdownWrapper>
      <S.DropdownResult
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{!selectedCategory ? "Tous" : selectedCategory}</span>
        <S.DropdownArrow isOpen={isOpen} />
      </S.DropdownResult>
      <S.DropdownList ref={ref} isOpen={isOpen}>
        {selectedCategory !== "" && (
          <S.DropdownItem onClick={() => handleSelectCategory("")}>
            Tous
          </S.DropdownItem>
        )}

        {category.map((category: any, index: any) => (
          <S.DropdownItem
            key={index}
            onClick={() => handleSelectCategory(category.name)}
          >
            {category.name}
          </S.DropdownItem>
        ))}
      </S.DropdownList>
    </S.DropdownWrapper>
  );
}
