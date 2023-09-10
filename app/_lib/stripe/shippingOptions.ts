type ShippingOption = {
  ID: string;
  description: string;
  delay: {
    description: string;
    min: number;
    max: number;
  };
  amount: number;
  weight: number;
};

const findBestPrice = (
  options: ShippingOption[],
  weight: number
): string | null => {
  let bestPriceID: string | null = null;
  let bestPrice: number | null = null;

  options.forEach((option) => {
    if (option.weight >= weight) {
      if (bestPrice === null || option.amount < bestPrice) {
        bestPriceID = option.ID;
        bestPrice = option.amount;
      }
    }
  });

  return bestPriceID;
};

export const calculateBestShippingOption = (
  weight: number,
  hasLiveFish: boolean
): string | null => {
  const shippingOptions: ShippingOption[] = [
    {
      ID: "shr_1NoRCRJSkUmCv6RbO63qJSID",
      description: "Colissimo - 3kg",
      delay: {
        description: "De 3 à 5 jours ouvrables",
        min: 3,
        max: 5,
      },
      amount: 9.5,
      weight: 3,
    },
    {
      ID: "shr_1NoRDjJSkUmCv6Rb6QBzc6oE",
      description: "Colissimo - 5kg",
      delay: {
        description: "De 3 à 5 jours ouvrables",
        min: 3,
        max: 5,
      },
      amount: 14.5,
      weight: 5,
    },
    {
      ID: "shr_1Nok1fJSkUmCv6RbgLr290Iv",
      description: "France express - 20kg",
      delay: {
        description: "Le lendemain avant 13h",
        min: 1,
        max: 1,
      },
      amount: 76,
      weight: 20,
    },
    // ... autres options d'expédition ...
  ];

  if (hasLiveFish) {
    // Si un produit de la catégorie "poisson" est présent dans le panier,
    // utiliser l'option de livraison spécifique.
    return "shr_1Nok1fJSkUmCv6RbgLr290Iv";
  } else {
    // Sinon, utiliser la fonction de calcul précédente.
    return findBestPrice(shippingOptions, weight);
  }
};
