import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            In 1985, ST PIZZA opened its doors for the very first time in Plano,
            Texas – and just like that, the Original home of all the pizza,
            pasta, salad, and desserts you can eat was born. For nearly four
            decades, ST PIZZA has been committed to creating fun, family-friendly
            restaurants where guests can spend quality time together and enjoy
            all their favorites for one low price.
          </p>
          <p>
            Consistently adapting to meet the changing needs of its guests in
            recent years, ST PIZZA put a stronger focus on its off-premise options
            with the launch of online ordering, and new menu items. Now, fans
            can easily order their favorites for pick-up or delivery at ST PIZZA
            locations across the country, making it easier for guests to enjoy
            TBPVA™, wherever they want to!  TBPVA™, you ask?  The Best Pizza
            Value Anywhere!
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
