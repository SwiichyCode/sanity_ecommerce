import Dropdown from "@/app/_components/_atoms/Dropdown";

type Props = {
  categories: any[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export default function FilterbarSelect({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <Dropdown
      category={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
}
