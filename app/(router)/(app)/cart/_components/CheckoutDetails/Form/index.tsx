import { useCartStore } from "../../../_stores/cart.store";
import TextField from "@/app/_components/_atoms/TextField";
import { ProfileType } from "@/app/_modules/auth/_types/profile.type";
import * as S from "./styles";

type Props = {
  user: any;
  profile: Partial<ProfileType> | undefined;
};

export default function CheckoutDetailForm({ user, profile }: Props) {
  const { cart } = useCartStore();

  const ifFish = cart.some((product) => product.category === "poisson");

  return (
    <S.CheckoutDetailsWrapper>
      <S.CheckoutDetailsTitle>Informations de paiement</S.CheckoutDetailsTitle>

      <S.CheckoutDetailsFormGroup>
        <S.CheckoutDetailsFormGroupTitle>
          Détails de facturation
        </S.CheckoutDetailsFormGroupTitle>
        <S.TextFieldWrapper>
          <TextField
            labeltext="Nom"
            name="lastname"
            defaultValue={profile?.lastname}
            placeholder="Ward"
            rules={{ required: true }}
          />
          <TextField
            labeltext="Prénom"
            name="firstname"
            defaultValue={profile?.firstname}
            placeholder="Alexei"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <TextField
          labeltext="Email"
          name="email"
          defaultValue={user.email}
          placeholder="alexei@mail.com"
          rules={{ required: true }}
        />

        <TextField
          labeltext="Numéro de téléphone"
          name="phone"
          defaultValue={profile?.phone}
          placeholder="06 12 34 56 78"
          rules={{ required: true }}
        />
      </S.CheckoutDetailsFormGroup>
      <S.CheckoutDetailsFormGroup>
        <S.CheckoutDetailsFormGroupTitle>
          Informations d&apos;expédition
        </S.CheckoutDetailsFormGroupTitle>
        <TextField
          labeltext="Adresse de livraison"
          name="address"
          defaultValue={profile?.address}
          placeholder="1137 Williams Avenue"
          rules={{ required: true }}
        />
        <S.TextFieldWrapper>
          <TextField
            labeltext="Code postal"
            name="zipcode"
            defaultValue={profile?.zipcode}
            placeholder="10001"
            rules={{ required: true }}
          />
          <TextField
            labeltext="Ville"
            name="city"
            defaultValue={profile?.city}
            placeholder="Paris"
            rules={{ required: true }}
          />
        </S.TextFieldWrapper>
        <TextField
          labeltext="Pays"
          name="country"
          defaultValue={profile?.country}
          placeholder="France"
          rules={{ required: true }}
        />
      </S.CheckoutDetailsFormGroup>

      {ifFish && (
        <S.FormMessage>
          Notre société garantit la bonne santé des poissons que nous expédions.
          Chaque poisson passe par une période de quarantaine dans nos bacs
          après son importation. Ils ne sont mis en vente que lorsque nous
          sommes certains de leur parfaite santé. C&apos;est pourquoi, nous
          déclinons toute responsabilité au-delà des premiers jours suivant
          votre achat.
        </S.FormMessage>
      )}
    </S.CheckoutDetailsWrapper>
  );
}
