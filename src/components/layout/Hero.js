import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4 flex justify-between w-full">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-josefin">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;<span className="text-primary font-lilita">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500 text-md font-josefin">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-8 text-sm ">
          <Link
            className="bg-primary uppercase flex whitespace-nowrap items-center gap-2 text-white
          px-4 py-2 rounded-full"
            href={"/menu"}
          >
            Order now
            <Right />
          </Link>
          <Link
            className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold"
            href={"/about"}
          >
            Learn more
            <Right />
          </Link>
        </div>
      </div>
      <div className="relative hidden md:inline-flex justify-center">
        <Image
          priority
          src={"/pizza.png"}
          alt="pizza"
          // layout={"fill"}
          objectFit={"contain"}
          width={350}
          height={300}
          className="animate-spin-slow"
        />
      </div>
    </section>
  );
}
