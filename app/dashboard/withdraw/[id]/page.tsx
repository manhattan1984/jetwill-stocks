import { createClient } from "@/utils/supabase-server";
import React from "react";
import Withdrawal from "./Withdrawal";

// @ts-ignore
const page = async ({ params: { id } }) => {
  const supabase = createClient();
  const email = (await supabase.auth.getSession()).data.session?.user.email;
  const getWalletsData = async () => {
    const { data, error } = await supabase.from("wallets").select("name");
    return data;
  };

  const getUserData = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    //
    console.log("user error", error);

    return data;
  };

  const userData = getUserData();
  const walletsData = getWalletsData();

  const [user, wallets] = await Promise.all([userData, walletsData]);

  console.log("user", user);

  const balance = user.total_profit + user.total_deposit;

  console.log(balance);
  

  // @ts-ignore
  return <Withdrawal balance={balance} email={email} wallets={wallets} user_id={id} />;
};

export default page;
