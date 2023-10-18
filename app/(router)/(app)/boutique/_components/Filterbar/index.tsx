"use client";
import FilterbarHeader from "./FilterbarHeader";
import { useFilterBarStore } from "./useFilterBarStore";
import FilterbarPosition from "./FilterbarPosition";
import FilterbarSearch from "./FilterbarSearch";
import FilterbarSelect from "./FilterbarSelect";
import * as S from "./styles";

export default function FilterBar() {
  const {
    searchQuery,
    setSearchQuery,
    categories,
    selectedCategory,
    setSelectedCategory,
    position,
    setPosition,
  } = useFilterBarStore();

  return (
    <S.FilterBarWrapper className="responsive-padding">
      <FilterbarHeader />
      {/* <FilterbarPosition position={position} setPosition={setPosition} /> */}
      <FilterbarSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilterbarSelect
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </S.FilterBarWrapper>
  );
}
