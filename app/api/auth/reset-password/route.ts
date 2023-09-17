import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  return await supabase.auth.resetPasswordForEmail("BOOMHEADSHOTMn@gmail.com", {
    redirectTo: `localhost:3000/api/auth/callback?next="/reset"`,
  });
}
