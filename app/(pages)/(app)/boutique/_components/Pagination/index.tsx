import { usePaginationStore } from "./usePaginationStore";
import * as S from "./styles";

type Props = {
  filteredProducts?: any;
};

export default function Pagination({ filteredProducts }: Props) {
  const { page, productsPerPage, setPage } = usePaginationStore();
  const pageNumbers = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <S.PaginationWrapper>
      <S.PaginationArrow
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Précédent
      </S.PaginationArrow>
      <S.PaginationButtonContainer>
        {Array.from({ length: pageNumbers }, (_, index) => (
          <S.PaginationButton
            index={index + 1}
            page={page}
            key={index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </S.PaginationButton>
        ))}
      </S.PaginationButtonContainer>
      <S.PaginationArrow
        onClick={() => setPage(page + 1)}
        disabled={page === pageNumbers}
      >
        Suivant
      </S.PaginationArrow>
    </S.PaginationWrapper>
  );
}
