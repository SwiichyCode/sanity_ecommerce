import * as S from "./styles";

type Props = {
  categories: any[];
  selectedCategory: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function FilterbarSelect({
  categories,
  selectedCategory,
  handleCategoryChange,
}: Props) {
  return (
    <S.CategorySelect value={selectedCategory} onChange={handleCategoryChange}>
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category.name}>
          {category.name}
        </option>
      ))}
    </S.CategorySelect>
  );
}
