"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../AppContext";
import ShoppingCart from "@/components/icons/ShoppingCart";
import Bars3 from "@/components/icons/Bars3";

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  const { cartProducts } = useContext(CartContext);
  let userName = userData?.name || userData?.email;
  // if (userData?.name) {
  //   userName = userData.name
  // }
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  //   console.log("🟡 Session status:", status);
  //   console.log("🟢 Session data:", session?.data);

  return (
    <header>
      <div className="flex items-center md:hidden justify-between">
        <Link className="text-primary font-lilita text-3xl" href={"/"}>
          Geronimo&apos;s pizza
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span
                className="absolute -top-2 -right-4 bg-primary
          text-white rounded-full text-xs p-1 leading-3 font-roboto"
              >
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen((prev) => !prev)}
          >
            <Bars3 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2
        flex flex-col gap-2 text-center"
          onClick={() => setMobileNavOpen((prev) => !prev)}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex item-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-josefin">
          <Link className="text-primary relative -top-1 font-lilita text-3xl" href={"/"}>
            Geronimo&apos;s pizza
          </Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-josefin">
          <AuthLinks status={status} userName={userName} />
          <Link href={"/cart"} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span
                className="absolute -top-2 -right-4 bg-primary
          text-white rounded-full text-xs p-1 leading-3 font-roboto"
              >
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
