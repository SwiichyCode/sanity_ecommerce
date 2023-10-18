import stripe from "./client";

export const getShippingRates = async () => {
  const shippingRates = await stripe.shippingRates.list({
    limit: 15,
    active: true,
  });

  return shippingRates.data;
};

const findBestPrice = (options: any[], weight: number): string | null => {
  let bestPriceID: string | null = null;
  let bestPrice: number | null = null;

  options.forEach((option) => {
    const optionWeight = Number(option.metadata.weight);
    if (optionWeight >= weight) {
      const optionPrice = option.fixed_amount.amount;
      if (bestPrice === null || optionPrice < bestPrice) {
        bestPriceID = option.id;
        bestPrice = optionPrice;
      }
    }
  });

  return bestPriceID;
};

export const calculateBestShippingOption = async (
  weight: number,
  hasLiveFish: boolean
) => {
  const shippingOptions = await getShippingRates();

  if (hasLiveFish) {
    return "shr_1O28VbJSkUmCv6RbGPKH21ab";
  } else {
    return findBestPrice(shippingOptions, weight);
  }
};
