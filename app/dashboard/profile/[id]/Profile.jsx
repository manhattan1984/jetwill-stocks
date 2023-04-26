"use client";
import { useSupabase } from "@/app/(context)/supabase-provider";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Profile = ({
  userData: {
    id,
    name_changes,
    first_name,
    last_name,
    email,
    phone_number,
    bitcoin_wallet,
  },
}) => {
  const { supabase } = useSupabase();

  const [bitcoin, setBitcoin] = useState(bitcoin_wallet);

  const [firstName, setFirstName] = useState(first_name);
  const [lastName, setLastName] = useState(last_name);

  const url =
    process.env.NODE_ENV === "development"
      ? "evilworld.com:3000"
      : "www.jetwillstocks.com";

  const handleUpdateWallets = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        bitcoin_wallet: bitcoin,
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed To Update Wallets");
      return;
    }
    toast.success("Wallets updated successfully");
  };

  const signUpLink = `${url}/signup/${id}`;
  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center">
        <div className="bg-white rounded shadow p-4 w-full m-4 max-w-md">
          <p className="text-xl mb-4">Profile Information</p>
          <div className="flex flex-col gap-2">
            <div className="">
              <p className="text-sm">First Name</p>
              <input
                disabled={name_changes < 1}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Last Name</p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={name_changes < 1}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Email</p>
              <input
                type="text"
                value={email}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Phone No.</p>
              <input
                type="text"
                value={phone_number}
                className="border p-1 my-2 w-full"
              />
            </div>
            <div className="">
              <p className="text-sm">Bitcoin Wallet</p>
              <input
                type="text"
                value={bitcoin}
                onChange={(e) => setBitcoin(e.target.value)}
                className="border p-1 my-2 w-full"
              />
            </div>

            <div className="">
              <p className="text-sm">Referral Link (Click to copy)</p>
              <input
                onClick={() => {
                  navigator.clipboard.writeText(signUpLink);
                  toast.success("Copied To Clipboard");
                }}
                type="text"
                value={signUpLink}
                className="border p-1 my-2 w-full text-xs"
              />
            </div>
          </div>
          <button onClick={handleUpdateWallets} className="text-blue-600 my-2">
            Save Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
