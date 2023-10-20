import Image from "next/image";
import { usePaginationStore } from "./usePaginationStore";
import * as S from "./styles";

type Props = {
  filteredProducts?: any;
};

export default function Pagination({ filteredProducts }: Props) {
  const { page, productsPerPage, setPage } = usePaginationStore();
  const filteredProductStock = filteredProducts.filter(
    (product: any) => product.stock > 0
  );

  const pageNumbers = Math.ceil(filteredProductStock.length / productsPerPage);

  const maxDisplayedButtons = 3;
  const halfDisplayedButtons = Math.floor(maxDisplayedButtons / 2);

  let startPage = page - halfDisplayedButtons;
  let endPage = page + halfDisplayedButtons;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(pageNumbers, maxDisplayedButtons);
  }

  if (endPage > pageNumbers) {
    endPage = pageNumbers;
    startPage = Math.max(1, endPage - maxDisplayedButtons + 1);
  }

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page === pageNumbers) return;
    setPage(page + 1);
  };

  if (filteredProductStock.length === 0) return null;

  return (
    <S.PaginationWrapper>
      <S.PaginationArrow onClick={handlePreviousPage} disabled={page === 1}>
        <Image src="/left_arrow.svg" alt="arrow-left" width={32} height={32} />
      </S.PaginationArrow>
      <S.PaginationButtonContainer>
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <S.PaginationButton
            index={startPage + index}
            page={page}
            key={startPage + index}
            onClick={() => setPage(startPage + index)}
          >
            {startPage + index}
          </S.PaginationButton>
        ))}
      </S.PaginationButtonContainer>
      <S.PaginationArrow
        onClick={handleNextPage}
        disabled={page === pageNumbers}
      >
        <Image src="/right_arrow.svg" alt="arrow-left" width={32} height={32} />
      </S.PaginationArrow>
    </S.PaginationWrapper>
  );
}
