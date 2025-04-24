"use client";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
import { useEffect, useState } from "react";
import Preloader from '@/components/Preloader'

export default function HomeMenu() {
  const [bestSelleers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -left-5 -top-[70px] text-left -z-10">
          <Image
            src={"/new_sallad1.png"}
            width={109}
            height={189}
            alt={"sallad"}
          />
        </div>
        <div className="absolute -top-[100px] -right-5 -z-10">
          <Image
            src={"/new_sallad2.png"}
            width={107}
            height={195}
            alt={"sallad"}
          />
        </div>
      </div>
      <div className="text-center mb-4 mt-10">
        <SectionHeaders
          subHeader={"check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      {bestSelleers?.length > 0 ? (
        <div className="grid sm:grid-cols-3 gap-4">
          {bestSelleers?.length > 0 &&
            bestSelleers.map((item) => <MenuItem key={item._id} {...item} />)}
        </div>
      ) : (
        <Preloader />
      )}
    </section>
  );
}
