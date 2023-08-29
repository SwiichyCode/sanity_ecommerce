import * as S from "./styles";

type Props = {
  filter: string;
  setFilter: (filter: string) => void;
};

export default function FilterbarSearch({ filter, setFilter }: Props) {
  return (
    <S.SearchBar
      placeholder="Search"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
}
