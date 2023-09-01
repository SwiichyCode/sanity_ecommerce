import { useState } from "react";
import * as S from "./styles";

type Props = {
  searchQuery: string;
  setSearchQuery: (filter: string) => void;
};

export default function FilterbarSearch({
  searchQuery,
  setSearchQuery,
}: Props) {
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    setSearchTimeout(
      setTimeout(() => {
        setSearchQuery(value);
      }, 300)
    );
  };

  return (
    <S.SearchBarWrapper>
      <S.SearchIcon />
      <S.SearchBar
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </S.SearchBarWrapper>
  );
}
