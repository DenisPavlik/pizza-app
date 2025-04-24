"use client";
import { useProfile } from "@/components/UseProfile";
import Right from "@/components/icons/Right";
import UserTabs from "@/components/layout/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import LoadingStatus from "@/components/layout/LoadingStatus";

export default function MenuItemsPage() {
  const { loading, data } = useProfile();
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return <LoadingStatus text={'Loading menu-items'} />;
  }

  if (!data.admin) {
    return <div className="mt-32 text-center font-josefin">
    <h1 className="text-xl">Not an admin</h1>
    <Link href={"/"} className="text-gray-500 hover:underline">
      Press here for redirect
    </Link>
  </div>;
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button" href={"/menu-items/new"}>
          Create new menu item
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                key={item._id}
                href={"/menu-items/edit/" + item._id}
                className="bg-gray-200 rounded-lg p-4"
              >
                <div className="relative">
                  <Image
                    className="rounded-md"
                    src={item.image}
                    alt={"item"}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
        {!menuItems?.length > 0 && (
            <h2 className="max-w-2xl flex justify-center mt-8">
              <span>There is no one menu item.</span>
            </h2>
          )}
      </div>
    </section>
  );
}
