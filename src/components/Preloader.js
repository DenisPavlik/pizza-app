import Image from "next/image";

export default function Preloader () {
  return (
    <div className="flex items-center justify-center">
          <Image
            src={"/preloader1.png"}
            alt="pizza_preloader"
            width={200}
            height={200}
            className="animate-spin-preloader"
          />
        </div>
  )
}