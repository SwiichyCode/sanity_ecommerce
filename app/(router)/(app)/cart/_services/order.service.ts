import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseClient = createClientComponentClient();

type CreateOrder = {
  profile_id?: string;
  product: any;
};

async function createOrder({ profile_id, product }: CreateOrder) {
  const { data, error } = await supabaseClient.from("order").insert({
    profile_id,
    product,
  });

  return { data, error };
}

async function getLastOrder(profile_id: string) {
  const { data, error } = await supabaseClient
    .from("order")
    .select("*")
    .eq("profile_id", profile_id)
    .order("created_at", { ascending: false })
    .limit(1);

  return { data, error };
}

const OrderService = {
  createOrder,
  getLastOrder,
};

export default OrderService;
