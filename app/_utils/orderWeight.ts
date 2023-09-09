export const orderTotalWeight = (cart: any) => {
  const totalWeight = cart.reduce(
    (acc: any, item: any) => acc + item.weight * item.quantity,
    0
  );

  const totalWeightKg = totalWeight / 1000;

  return totalWeightKg;
};
