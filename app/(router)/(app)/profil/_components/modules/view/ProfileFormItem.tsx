import FormItemWrapper from "../../container/FormItemWrapper";
import TextField from "../../UI/TextField";
import EditItem from "../action/EditItem";
import ButtonAction from "../../UI/ButtonAction";

type Props = {
  item: any;
  editableItem: string | null;
  successMessage: string | null;
  onEdit: (item: string) => void;
  onCancel: () => void;
  register: any;
};

export default function ProfileFormItem({
  item,
  editableItem,
  successMessage,
  onEdit,
  onCancel,
  register,
}: Props) {
  return (
    <FormItemWrapper>
      <TextField
        label={item.label}
        value={item.value}
        register={register}
        registerValue={item.register}
        readOnly={editableItem !== item.register}
      />

      {editableItem === item.register ? (
        <EditItem successMessage={successMessage} onCancel={onCancel} />
      ) : (
        <ButtonAction
          text={item.actionLabel}
          variants="edit"
          onClick={() => onEdit(item.register)}
        />
      )}
    </FormItemWrapper>
  );
}
