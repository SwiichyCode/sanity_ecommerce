import { usePaginationStore } from "./usePaginationStore";
import * as S from "./styles";

type Props = {
  filteredProducts?: any;
};

export default function Pagination({ filteredProducts }: Props) {
  const { page, productsPerPage, setPage } = usePaginationStore();
  const pageNumbers = Math.ceil(filteredProducts.length / productsPerPage);

  const maxDisplayedButtons = 3; // Nombre maximal de boutons affichés
  const halfDisplayedButtons = Math.floor(maxDisplayedButtons / 2);

  let startPage = Math.max(1, page - halfDisplayedButtons);
  let endPage = Math.min(pageNumbers, startPage + maxDisplayedButtons - 1);
  startPage = Math.max(1, endPage - maxDisplayedButtons + 1);

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page === pageNumbers) return;
    setPage(page + 1);
  };

  return (
    <S.PaginationWrapper>
      <S.PaginationArrow onClick={handlePreviousPage} disabled={page === 1}>
        Précédent
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
        Suivant
      </S.PaginationArrow>
    </S.PaginationWrapper>
  );
}