import ButtonAction from "../../UI/ButtonAction";
import SuccessMessage from "../../UI/SuccessMessage";

type Props = {
  successMessage: string | null;
  onCancel: () => void;
};

export default function EditItem({ successMessage, onCancel }: Props) {
  return (
    <div>
      {successMessage ? (
        <SuccessMessage message={successMessage} />
      ) : (
        <div className="flex gap-2">
          <ButtonAction type="submit" variants="confirm" text="Confirmation" />
          <ButtonAction variants="cancel" text="Annuler" onClick={onCancel} />
        </div>
      )}
    </div>
  );
}
