"use client";
import FilterbarHeader from "./FilterbarHeader";
import { useFilterBarStore } from "./useFilterBarStore";
import * as S from "./styles";
import FilterbarPosition from "./FilterbarPosition";
import FilterbarSearch from "./FilterbarSearch";
import FilterbarSelect from "./FilterbarSelect";

type Props = {
  products?: any;
};

export default function FilterBar({ products }: Props) {
  const {
    filter,
    setFilter,
    categories,
    selectedCategory,
    setSelectedCategory,
    position,
    setPosition,
  } = useFilterBarStore();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <S.FilterBarWrapper>
      <FilterbarHeader />
      <FilterbarPosition position={position} setPosition={setPosition} />
      <FilterbarSearch filter={filter} setFilter={setFilter} />
      <FilterbarSelect
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
    </S.FilterBarWrapper>
  );
}
