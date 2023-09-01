import stripe from "./client";

export default async function getStripeProducts() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const res = products.data;

  return res;
}
