import { ProfileFormType } from "@/app/_modules/auth/_types/profile.type";
import * as S from "./styles";

type Inputs = Partial<ProfileFormType>;

type Props = {
  item: any;
  editableItem: string | null;
  successMessage: string | null;
  onEdit: (item: string) => void;
  onCancel: () => void;
  register: any;
};

export default function ProfileInformationsFormItem({
  item,
  editableItem,
  successMessage,
  onEdit,
  onCancel,
  register,
}: Props) {
  return (
    <S.ProfilItem>
      <S.ProfilItemWrapper>
        <S.ProfilItemLabel>{item.label}</S.ProfilItemLabel>
        <S.ProfilItemValue
          defaultValue={item.value}
          {...register(item.register as keyof Inputs)}
          readOnly={editableItem !== item.register}
        />
      </S.ProfilItemWrapper>
      {editableItem === item.register ? (
        <div>
          {successMessage ? (
            <S.SuccessMessage>{successMessage}</S.SuccessMessage>
          ) : (
            <>
              <S.ProfilItemAction className="confirmation" type="submit">
                Confirmation
              </S.ProfilItemAction>
              <S.ProfilItemAction className="cancel" onClick={onCancel}>
                Annuler
              </S.ProfilItemAction>
            </>
          )}
        </div>
      ) : (
        <S.ProfilItemAction onClick={() => onEdit(item.register)}>
          {item.actionLabel}
        </S.ProfilItemAction>
      )}
    </S.ProfilItem>
  );
}
